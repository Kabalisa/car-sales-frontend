import styles from "./styles/postAdLayout.module.scss";

const PostAdLayout = ({ children, title }) => {
  return (
    <main className="flex">
      <section className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </section>
    </main>
  );
};

export { PostAdLayout };
