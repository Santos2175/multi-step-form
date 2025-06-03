import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { fullFormSchema } from '../../schema/formSchema';
import type { FormData } from '../../schema/formSchema';

const stepLabels = [
  'Personal Info',
  'Address',
  'Account',
  'Preferences',
  'Review',
];

const defaultValues: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  username: '',
  password: '',
  confirmPassword: '',
  newsletter: false,
  plan: 'basic',
};

type Props = {};

const MultiStepForm = (props: Props) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(fullFormSchema),
    defaultValues,
    mode: 'onTouched',
  });
  return <div>MultiStepForm</div>;
};

export default MultiStepForm;
