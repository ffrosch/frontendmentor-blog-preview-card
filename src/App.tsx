import { Global, css } from '@emotion/react';
import placeholderImage from './assets/images/illustration-article.svg';
import authorImage from './assets/images/image-avatar.webp';

const colors = {
  primary: '#F4D04E',
  white: '#FFFFFF',
  grey: '#7F7F7F',
  black: '#111111',
};

const text = {
  heading: '24px',
  bodyM: '16px',
  bodyS: '14px',
};

const cardData = {
  title: 'HTML & CSS foundations',
  preview:
    'These languages are the backbone of every website, defining structure, content, and presentation.',
  imageUrl: placeholderImage,
  author: 'Greg Hooper',
  authorImageUrl: authorImage,
  date: '2023-12-21', // or: Date.UTC(2023, 11, 21)
  tag: 'Learning',
};

const cardCss = {
  self: css({
    cursor: 'pointer',
    width: '384px',
    height: '522px',
    borderRadius: '20px',
    backgroundColor: colors.white,
    padding: '24px',
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    boxShadow: `8px 8px ${colors.black}`,
    transition: 'all 0.2s ease-in-out',

    ':hover': {
      transform: 'translate(-8px, -8px)',
      boxShadow: `16px 16px ${colors.black}`,
    },

    '@media (max-width: 432px)': {
      width: '327px',
      height: '501px',
    },
  }),

  image: css({
    borderRadius: '10px',
    height: '200px',
    objectFit: 'cover',
  }),

  content: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  }),

  date: css({ fontSize: 'var(--text-body-s)' }),

  tag: css({
    backgroundColor: colors.primary,
    fontWeight: 'bold',
    width: 'fit-content',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: 'var(--text-body-s)',
  }),

  title: css({
    fontSize: 'var(--text-h)',
    fontWeight: 'bold',

    ':hover': {
      color: colors.primary,
    },
  }),

  preview: css({
    color: colors.grey,
    fontSize: 'var(--text-body-m)',
  }),

  author: css({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: 'bold',
    fontSize: 'var(--text-body-s)',
  }),
};

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

        html {
          --text-h: ${text.heading};
          --text-body-m: ${text.bodyM};
          --text-body-s: ${text.bodyS};
          font-family: 'Figtree', sans-serif;

          @media (max-width: 432px) {
            --text-h: 20px;
            --text-body-m: 14px;
            --text-body-s: 12px;
          }
        }

        body {
          background-color: ${colors.primary};
          min-height: 100dvh;
          display: grid;
        }

        #root {
          place-self: center;
        }
      `}
    />
  );
};

const BlogPreviewCard = ({ props }: { props: typeof cardData }) => {
  const { title, imageUrl, authorImageUrl, tag, date, preview, author } = props;

  return (
    <div css={cardCss.self}>
      <img
        css={cardCss.image}
        src={imageUrl}
        alt='Title image for the blog post'
        height='200'
        width='336'
        // use style prop for dynamic styles: https://emotion.sh/docs/best-practices#use-the-style-prop-for-dynamic-styles
        // style={{ '--background-image': imageUrl }}
      />
      <div css={cardCss.content}>
        <p css={cardCss.tag}>{tag}</p>
        <p css={cardCss.date}>
          Published{' '}
          {Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }).format(new Date(date))}
        </p>
        <h2 css={cardCss.title}>{title}</h2>
        <p css={cardCss.preview}>{preview}</p>
      </div>
      <div css={cardCss.author}>
        <img
          src={authorImageUrl}
          alt='Picture of the Author'
          width='32'
          height='32'
        />
        <p>{author}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <BlogPreviewCard props={cardData} />
    </>
  );
}

export default App;
