'use client';

interface PostParagraph {
  text: string;
  bold: boolean;
}

export default function Paragraph(paragraph: PostParagraph) {
  return <p className={paragraph.bold ? 'bold' : ''}>{paragraph.text}</p>;
}
