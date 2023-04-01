import React, { useEffect, useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import TaskActions from './TaskActions';
import GeneralGuideLine from './GeneralGuideLine';
import Accordion, { AccordionItem } from './Accordion';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AccordionContents from './AccordionContents';
import AccordionContentItem from './AccordionContentItem';

const Item = ({ title, children }) => {
  return (
    <div className="flex md:items-center flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-32 text-[#777777] whitespace-nowrap">{title}</div>
      <div className="w-full pl-2.5 md:pl-0">{children}</div>
    </div>
  );
};

// task details
const TaskDetails = () => {
  const [timerStart, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timerStart) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds === 60) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        }
        if (minutes === 60) {
          setHours((hours) => hours + 1);
          setMinutes(0);
        }
        if (hours === 24) {
          setDays((days) => days + 1);
          setHours(0);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerStart]);

  const timer = () => {
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let hr = hours < 10 ? `0${hours}` : hours;
    let dy = days < 10 ? `0${days}` : days;
    return `${hr}:${min}:${sec}`;
  };
  return (
    <div className="p-4">
      {/* tag line */}
      <div className="flex flex-wrap items-center gap-2 pb-4">
        <span className="font-medium">SubTask:</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting elit</span>
      </div>

      {/* details */}
      <div className="grid grid-cols-12 gap-3 ">
        {/* cols */}
        <div className="col-span-12 md:col-span-8">
          <div className="bg-white rounded-lg pb-4">
            {/* buttons groups */}
            <div className="flex items-center gap-3 p-4 border-b-2 border-[#E7EFFC]">
              {timerStart ? (
                <>
                  {/* Time icon */}
                  <Button disabled className="disabled:bg-blue-50 disabled:border-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                    <span className="text-[#4E4E4E] font-medium">{timer()}</span>
                  </Button>

                  {/* pause icon */}
                  <Button onClick={() => setTimerStart(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
                    </svg>
                    <span className="hidden lg:block text-[#4E4E4E] font-medium"> Stop Timer </span>
                  </Button>
                </>
              ) : (
                <>
                  {/* start icon */}
                  <Button onClick={() => setTimerStart(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.988" height="20" viewBox="0 0 14.988 20">
                      <path
                        id="play_arrow_FILL0_wght400_GRAD0_opsz48_1_"
                        data-name="play_arrow_FILL0_wght400_GRAD0_opsz48 (1)"
                        d="M320,313V293l14.988,10ZM322.044,303Zm0,6.107L331.207,303l-9.163-6.107Z"
                        transform="translate(-320 -293)"
                      />
                    </svg>
                    <span className="hidden lg:block"> Start Timer </span>
                  </Button>
                  {/* complete */}
                  <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.382" height="14.715" viewBox="0 0 20.382 14.715">
                      <path
                        id="check_FILL0_wght400_GRAD0_opsz48_1_"
                        data-name="check_FILL0_wght400_GRAD0_opsz48 (1)"
                        d="M161.013,354.715,154,347.7l1.346-1.346,5.667,5.667L173.036,340l1.346,1.346Z"
                        transform="translate(-154 -340)"
                      />
                    </svg>

                    <span className="hidden lg:block"> Make As Complete</span>
                  </Button>
                </>
              )}

              {/* Request time */}
              <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.158" height="14.158" viewBox="0 0 14.158 14.158">
                  <path
                    id="add_FILL0_wght400_GRAD0_opsz48"
                    d="M206.321,310.158v-6.321H200v-1.517h6.321V296h1.517v6.321h6.321v1.517h-6.321v6.321Z"
                    transform="translate(-200 -296)"
                  />
                </svg>
                <span className="hidden lg:block"> Request Time Extension</span>
              </Button>

              <Button className="border-0 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </Button>
            </div>

            {/* task details */}
            <div className="p-4 flex flex-col gap-3">
              {/* parent task */}
              <Item title="Parent Task: ">Lorem Ipsum is simply dummy text of the printing and typesetting</Item>

              {/* project */}
              <Item title="Project: ">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1D82F5]" />
                  Lorem Ipsum is simply dummy text.
                </div>
              </Item>

              {/* milestone */}
              <Item title="Milestone: ">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D30000]" />
                  Lorem Ipsum is simply dummy text of the printing
                </div>
              </Item>

              {/* assigned to */}
              <Item title="Assigned To: ">
                <div className="flex items-center gap-2">
                  <Image src="/icons/avatar2.png" width={30} height={30} alt="avatar" />
                  <div className="flex flex-col">
                    <span className="text-[#4E4E4E] font-medium">
                      MD. Sadik Istiak
                      {true ? (
                        <span className="px-2 rounded-lg text-[10px] font-base bg-[#686868] text-white ml-2">
                          It's You
                        </span>
                      ) : null}
                    </span>
                    <span className="text-[#4E4E4E] text-xs">UX/UI designer</span>
                  </div>
                </div>
              </Item>

              {/* assigned by */}
              <Item title="Assigned By: ">
                <div className="flex items-center gap-2">
                  <Image src="/icons/avatar1.png" width={30} height={30} alt="avatar" />
                  <div className="flex flex-col">
                    <span className="text-[#4E4E4E] font-medium">
                      Tapas Mandal
                      {false ? (
                        <span className="px-2 rounded-lg text-[10px] font-base bg-[#686868] text-white ml-2">
                          It's You
                        </span>
                      ) : null}
                    </span>
                    <span className="text-[#4E4E4E] text-xs">Co-Ordinator</span>
                  </div>
                </div>
              </Item>

              {/* priority */}
              <Item title="Priority: ">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FCBD01]" />
                  Medium
                </div>
              </Item>

              {/* category */}
              <Item title="Task Category: ">
                <div className="flex items-center gap-2">Frontend Design</div>
              </Item>
            </div>

            {/* task description */}
            <div className="p-4 flex flex-col gap-4">
              <GeneralGuideLine
                title="General Guideline"
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

              <Accordion>
                <AccordionItem title="Task Description">
                  <AccordionContents>
                    {[...Array(5)].map((_, i) => (
                      <AccordionContentItem
                        key={i}
                        index={i + 1}
                        date="01-04-23"
                        time="11:22 AM"
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
                    ))}
                  </AccordionContents>
                </AccordionItem>
              </Accordion>

              <Accordion>
                <AccordionItem title="Task Revision from User">
                  <AccordionContents>
                    {[...Array(5)].map((_, i) => (
                      <AccordionContentItem
                        key={i}
                        index={i + 1}
                        date="01-04-23"
                        time="11:22 AM"
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
                    ))}
                  </AccordionContents>
                </AccordionItem>
              </Accordion>

              <GeneralGuideLine
                title={'Task Description'}
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
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="col-span-12 md:col-span-4">
          <TaskActions />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
