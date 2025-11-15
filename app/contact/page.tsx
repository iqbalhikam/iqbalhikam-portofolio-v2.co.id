/* eslint-disable react/no-unescaped-entities */
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SendMessageFromInner from './components/SendMessageFromInner';
import { Form, FormDescription } from '@/components/ui/form';
import { sendMessageFormSchema, type SendMessageFormSchema } from './form/send-message';
import PageTransition from '@/components/animation/PageTransition';
import { MdOutlineMail } from 'react-icons/md';
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const PageContact = () => {
  const form = useForm<SendMessageFormSchema>({
    resolver: zodResolver(sendMessageFormSchema),
  });

  const heandleSendMessageSubmit = () => {
    console.log(form.getValues());
  };
  return (
    <PageTransition>
      <div className=" flex-grow container  mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-secondary-foreground dark:text-white">
        <div className="flex h-full">
          <section className=" m-5 p-10 w-full rounded-2xl dark:bg-accent/20">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out, and I'll get back to you as soon as possible.</p>
            <div>
              <div className="flex items-center content-center gap-2 mt-4 ">
                <div className="w-8 h-8 rounded-full border border-primary flex justify-center items-center ">
                  <MdOutlineMail />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">Email</h2>
                  <p className="text-xs text-accent-foreground/50">iqvalHikam@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center content-center gap-2 mt-4 ">
                <div className="w-8 h-8 rounded-full border border-primary flex justify-center items-center ">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">Phone</h2>
                  <p className="text-xs text-accent-foreground/50">-</p>
                </div>
              </div>
            </div>
            <h2 className="text-md font-bold mb-2 mt-5">Connect with Me</h2>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-primary bg-primary/10 flex justify-center items-center ">
                <FaGithub />
              </div>
              <div className="w-8 h-8 rounded-full border border-primary bg-primary/10 flex justify-center items-center ">
                <FaLinkedin />
              </div>
              <div className="w-8 h-8 rounded-full border border-primary bg-primary/10 flex justify-center items-center ">
                <FaInstagram />
              </div>
            </div>
          </section>
          <section className=" m-5 p-10 w-2/3 rounded-2xl bg-secondary-foreground/10 dark:bg-accent/20 text-secondary-foreground">
            <div className="">
              <Form {...form}>
                <SendMessageFromInner onSendMessageSubmit={heandleSendMessageSubmit} buttonText="Kirim" />
              </Form>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default PageContact;
