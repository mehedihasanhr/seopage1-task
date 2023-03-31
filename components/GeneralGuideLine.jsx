import Link from 'next/link';

const GeneralGuideLine = () => {
  return (
    <div>
      <div className="p-3 rounded-t-lg bg-blue-50">
        <span>General Guideline</span>
      </div>

      <div className="flex flex-col gap-3 shadow-lg rounded-b-lg">
        <div className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam, accusantium deserunt
          molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo assumenda omnis esse tempore totam
          atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam, accusantium
          deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo assumenda omnis esse tempore
          totam atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam,
          accusantium deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo assumenda omnis
          esse tempore totam atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere
          ipsam, accusantium deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo assumenda
          omnis esse tempore totam atque.
          <Link href="/" className="text-blue-500 ml-2">
            Read full guideline
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralGuideLine;
