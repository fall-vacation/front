import Head from 'next/head';

type AppSeoProps = {
  title: string;
  keywords?: string[];
  descrption?: string;
};

const Seo = ({ title, keywords, descrption }: AppSeoProps) => {
  const keyword = keywords?.join(', ');
  return (
    <Head>
      <title>{title}</title>
      <meta name='keyword' content={keyword} />
      <meta name='description' content={descrption} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
