import React from "react";

const Advert = ({ product }) => {
  return (
    <div className="advert mt-5">
      <div className="advert-area">
        <img src={product.images[0]} alt="" />
        <h1 className="heading">Cazip Teklifleri Kaçırma Sakin</h1>
        <p className="pragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          culpa, adipisci excepturi recusandae obcaecati fuga nobis sunt nisi
          officia animi quaerat illo. Hic saepe repudiandae accusamus magni
          nostrum ullam rerum maiores repellat laborum quas explicabo voluptate,
          iusto suscipit dolores, tenetur reiciendis. Est nemo molestiae omnis
          quo id officia nesciunt consectetur asperiores nisi rerum facere
          architecto enim veniam modi impedit quis ab quas deserunt
          necessitatibus sapiente vitae molestias reprehenderit, cumque
          incidunt? Distinctio, deleniti. In quas aliquid assumenda, facere nisi
          dicta quibusdam autem aut voluptates dolorum placeat delectus esse
          distinctio ab repellendus? Eius provident neque dolores, quasi rem
          nobis quibusdam dicta saepe?
        </p>
      </div>
    </div>
  );
};

export default Advert;
