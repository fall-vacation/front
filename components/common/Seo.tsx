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
      <script src='https://apis.google.com/js/platform.js' async defer></script>
      <meta
        name='google-signin-client_id'
        content='372283287418-7u6ejvdougrh2qm3hpfhtu20ib7lohc2.apps.googleusercontent.com.apps.googleusercontent.com'
      />
    </Head>
  );
};

export default Seo;
