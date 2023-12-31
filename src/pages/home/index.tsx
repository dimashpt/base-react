import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const [t] = useTranslation('home_page');

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col">
      <h1>{t('title')}</h1>
    </main>
  );
};

export default HomePage;
