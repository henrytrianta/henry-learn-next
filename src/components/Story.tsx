import { BiMessageRoundedDetail } from 'react-icons/bi';

const Story = () => {
  console.log();
  return (
    <div className="border-b border-grey-lighter py-16 lg:py-20">
      <div className="flex items-center pb-6">
        <BiMessageRoundedDetail
          className="fill-current text-primary dark:text-white"
          size="32"
        />
        <h3 className="font-body font-semibold text-primary dark:text-white text-2xl ml-3">
          My Story
        </h3>
      </div>
      <div>
        <p className="font-body font-light text-primary dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie. Et leo duis ut diam. Sit amet tellus
          cras adipiscing enim eu turpis. Adipiscing at in tellus integer
          feugiat.
          <br />
          <br />
          Maecenas accumsan lacus vel facilisis. Eget egestas purus viverra
          accumsan in nisl nisi scelerisque eu. Non tellus orci ac auctor augue
          mauris augue neque gravida. Auctor augue mauris augue neque gravida in
          fermentum et sollicitudin. Tempus urna et pharetra pharetra massa
          massa ultricies mi quis. Amet mauris commodo quis imperdiet massa.
          Integer vitae justo eget magna fermentum iaculis eu non.
        </p>
      </div>
    </div>
  );
};

export default Story;
