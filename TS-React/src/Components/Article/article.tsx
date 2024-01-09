

  // Her deklarerer vi et interface der beskriver hvordan alle vores props ser ud
interface ArticleInterface {
    headline: string;
    date: Date;
    text: string;
  }
  
  // Og bruger interfacet til at "destrukturere" vores props objekt.
//   function ArticleComponent({ headline, date, text }: ArticleInterface) {
//     return (
//       <article>
//         <h1>{headline}</h1>
//         <span>{date}</span>
//         <p>{text}</p>
//       </article>
//     );
//   }