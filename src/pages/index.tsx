import Hero from '@/components/Hero';
import MyProjectList from '@/components/MyProjectList';
import Story from '@/components/Story';
import StoryList from '@/components/StoryList';

const Home = () => {
  console.log();
  return (
    <div className="container mx-auto">
      <Hero />
      <Story />
      <StoryList />
      <MyProjectList />
    </div>
  );
};

export default Home;
