import styled from '@emotion/styled';

export default function Body({ className, body }) {
  return <Container className={className} dangerouslySetInnerHTML={{ __html: body }} />
}

const Container = styled.div`
  & > * + * {
    margin-top: 0.8rem;
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin-top: 1.6rem;
  }

  & > p {
    line-height: 2;
  }

  & > ul,
  & > ol {
    padding-left: 1.6rem;
  }

  & > ul > li,
  & > ol > li {
    margin-top: 0.8rem;
  }
`;