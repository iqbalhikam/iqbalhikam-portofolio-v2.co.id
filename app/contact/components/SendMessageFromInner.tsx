import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SendMessageFormSchema } from '../form/send-message';
import { useFormContext } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type SendMessageFromInnerProps = {
  onSendMessageSubmit: (values: SendMessageFormSchema) => void;
  isLoading?: boolean;
  buttonText?: string;
};

const SendMessageFromInner = ({ onSendMessageSubmit, isLoading, buttonText }: SendMessageFromInnerProps) => {
  const form = useFormContext<SendMessageFormSchema>();
  return (
    <form onSubmit={form.handleSubmit(onSendMessageSubmit)} >
      <div className='flex flex-col md:flex-row lg:flex-row w-full md:gap-5 lg:gap-5 '>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-xs'>Name</FormLabel>
              <FormControl>
                <Input  type="text" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage className='text-end transition-all ease-in-out' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-xs'>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage className='text-end transition-all ease-in-out' />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-xs'>Subject</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormDescription />
            <FormMessage className='text-end transition-all ease-in-out' />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-xs'>Message</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription />
            <FormMessage className='text-end transition-all ease-in-out' />
          </FormItem>
        )}
      />
      <Button className="w-full" type="submit" disabled={isLoading}>
        {buttonText}
      </Button>
    </form>
  );
};

export default SendMessageFromInner;
