'use client';

interface PostHeading {
  level: number;
  text: string;
}

export default function Heading(heading: PostHeading) {
  const handleHeading = () => {
    switch (heading.level) {
      case 1:
        return <h1>{heading.text}</h1>;
      case 2:
        return <h2>{heading.text}</h2>;
      case 3:
        return <h3>{heading.text}</h3>;
    }
  };

  return handleHeading();
}
