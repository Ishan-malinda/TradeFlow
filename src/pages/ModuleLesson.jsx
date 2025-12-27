import { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import TopicSidebar from '../components/TopicSidebar';
import CodeBlock from '../components/CodeBlock';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { getLesson, getModule } from '../data/academyData';

function renderBlocks(blocks) {
  return blocks.map((b, idx) => {
    if (b.type === 'h2') return <h2 key={idx} className="lesson-h2">{b.text}</h2>;
    if (b.type === 'h3') return <h3 key={idx} className="lesson-h3">{b.text}</h3>;
    if (b.type === 'p') return <p key={idx} className="lesson-p">{b.text}</p>;
    if (b.type === 'ul')
      return (
        <ul key={idx} className="lesson-ul">
          {(b.items || []).map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      );
    if (b.type === 'ol')
      return (
        <ol key={idx} className="lesson-ol">
          {(b.items || []).map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      );
    if (b.type === 'callout')
      return (
        <div key={idx} className="lesson-callout">
          <div className="lesson-callout__title">{b.title}</div>
          <div className="lesson-callout__text">{b.text}</div>
        </div>
      );
    if (b.type === 'code')
      return <CodeBlock key={idx} title={b.language || 'Example'} code={b.code || ''} />;
    if (b.type === 'image')
      return <ImagePlaceholder key={idx} caption={b.caption || 'Image placeholder'} />;
    return null;
  });
}

const ModuleLesson = () => {
  const { moduleSlug, lessonId } = useParams();

  const module = useMemo(() => getModule(moduleSlug), [moduleSlug]);
  const lessonBundle = useMemo(() => getLesson(moduleSlug, lessonId), [moduleSlug, lessonId]);

  // If user opens /academy/:moduleSlug without a lessonId, redirect to first lesson
  if (module && !lessonId) {
    const first = module.topics?.[0]?.lessons?.[0];
    if (first) return <Navigate to={`/academy/${moduleSlug}/${first.id}`} replace />;
  }

  if (!module) {
    return (
      <main className="page">
        <div className="empty-state" data-aos="fade-up">
          <h1>Module not found</h1>
          <p>That module doesn’t exist yet. Go back to the Academy and pick a module.</p>
          <Link className="btn-hero" to="/academy">Back to Academy</Link>
        </div>
      </main>
    );
  }

  if (!lessonBundle) {
    return (
      <main className="page">
        <div className="empty-state" data-aos="fade-up">
          <h1>Lesson not found</h1>
          <p>This lesson doesn’t exist yet. Choose a lesson from the sidebar.</p>
          <Link className="btn-hero" to={`/academy/${moduleSlug}`}>Go to module</Link>
        </div>
      </main>
    );
  }

  const { topic, lesson } = lessonBundle;

  useEffect(() => {
    // Ensure we start reading at the top when navigating between lessons
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [moduleSlug, lessonId]);

  return (
    <main className="lms">
      <TopicSidebar moduleSlug={moduleSlug} topics={module.topics} />

      <article className="lms-content">
        <Breadcrumbs
          items={[
            { label: 'Academy', to: '/academy' },
            { label: module.title, to: `/academy/${moduleSlug}` },
            { label: topic.title, to: `/academy/${moduleSlug}/${lesson.id}` },
            { label: lesson.title },
          ]}
        />

        <header className="lesson-header" data-aos="fade-up">
          <div className="lesson-header__kicker">{module.title} • {topic.title}</div>
          <h1 className="lesson-h1">{lesson.title}</h1>
          <div className="lesson-header__meta">
            <span className="meta-chip">Text-first</span>
            <span className="meta-chip">No login</span>
            {lesson.readingTime ? <span className="meta-chip">{lesson.readingTime}</span> : null}
          </div>
        </header>

        <section className="lesson-body" data-aos="fade-up" data-aos-delay="100">
          {renderBlocks(lesson.blocks || [])}
        </section>

        <footer className="lesson-footer">
          <div className="lesson-footer__note">
            Want this to match your PDF exactly? Upload the PDF and I’ll convert the table of contents into this sidebar + lessons.
          </div>
        </footer>
      </article>
    </main>
  );
};

export default ModuleLesson;


