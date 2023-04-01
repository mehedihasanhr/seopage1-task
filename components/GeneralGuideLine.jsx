import Link from 'next/link';
import AccordionContentItem from './AccordionContentItem';
import AccordionContents from './AccordionContents';

const GeneralGuideLine = ({ title }) => {
  return (
    <div>
      <div className="p-3 rounded-t-lg bg-blue-50">
        <span>{title}</span>
      </div>

      <div className="flex flex-col gap-3 shadow-lg rounded-b-lg py-4">
        <AccordionContents>
          <AccordionContentItem
            index={1}
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam,
                      accusantium deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo
                      assumenda omnis esse tempore totam atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi ab repellat facere ipsam, accusantium deserunt molestiae? repellat facere ipsam, accusantium deserunt molestiae? Rerum nesciunt autem temporibus
                      facilis dicta. Molestias quo assumenda omnis esse tempore totam atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi ab repellat facere ipsam, accusantium deserunt molestiae? Rerum
                      nesciunt autem temporibus facilis dicta. Molestias quo assumenda omnis esse tempore totam atque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam,
                      accusantium deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo
                      assumenda omnis esse tempore totam atque. repellat facere ipsam, accusantium deserunt molestiae? Rerum nesciunt autem temporibus
                      facilis dicta. Molestias quo assumenda omnis esse tempore totam atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi ab repellat facere ipsam, accusantium deserunt molestiae? Rerum
                      nesciunt autem temporibus facilis dicta. Molestias quo assumenda omnis esse tempore totam atque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam,
                      accusantium deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo
                      assumenda omnis esse tempore totam atque. Rerum nesciunt autem temporibus
                      facilis dicta. Molestias quo assumenda omnis esse tempore totam atque. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nisi ab repellat facere ipsam, accusantium deserunt molestiae? Rerum
                      nesciunt autem temporibus facilis dicta. Molestias quo assumenda omnis esse tempore totam atque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab repellat facere ipsam,
                      accusantium deserunt molestiae? Rerum nesciunt autem temporibus facilis dicta. Molestias quo
                      assumenda omnis esse tempore totam atque."
          />
        </AccordionContents>
      </div>
    </div>
  );
};

export default GeneralGuideLine;
