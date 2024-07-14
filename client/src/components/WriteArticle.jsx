function WriteArticle() {
  return (
    // <section>
    <div className="flex flex-col items-center text-xl place-content-center">
      <textarea
        className="resize-none mb-5 focus:outline-none"
        placeholder="Your title..."
        cols="70"
        rows="2"
      />
      <textarea
        className="resize-none mb-5 focus:outline-none"
        placeholder="Your description..."
        cols="70"
      />
      <textarea
        className="resize-none mb-5 focus:outline-none"
        placeholder="Tell your story..."
        cols="70"
        rows="300"
      />
      {/* <
        className="focus:outline-none"
        placeholder="Tell your story..."
      /> */}
    </div>
    // </section>
  );
}

export default WriteArticle;
