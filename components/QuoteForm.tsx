'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Updated schema: add name, email, phone
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(1, 'Phone is required'),
  timeFrame: z.string().min(1, 'Choose Time Frame'),
  size: z.string().min(1, 'Choose Size'),
  quantity: z.string().min(1, 'Choose Quantity'),
  projectType: z.string().min(1, 'Please describe your project'),
});

type FormData = z.infer<typeof schema>;

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="px-4 py-12 bg-gray-50 flex justify-center">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-8">REQUEST A QUOTE</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <label className="block mb-1 font-medium text-gray-800">Name</label>
              <input
                {...register('name')}
                className="w-full border px-4 py-2 rounded text-gray-800 placeholder-gray-400"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">E-Mail</label>
              <input
                {...register('email')}
                className="w-full border px-4 py-2 rounded text-gray-800 placeholder-gray-400"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Row 2: Phone & Time Frame */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <label className="block mb-1 font-medium text-gray-800">Phone Number</label>
              <input
                {...register('phone')}
                className="w-full border px-4 py-2 rounded text-gray-800 placeholder-gray-400"
                placeholder="Your Phone Number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Time Frame <span className="text-red-500">*</span>
              </label>
              <select {...register('timeFrame')} className="w-full border px-4 py-2 rounded text-gray-800">
                <option value="">Choose Time Frame</option>
                <option value="1_week">Within 1 Week</option>
                <option value="1_month">Within 1 Month</option>
                <option value="flexible">Flexible</option>
              </select>
              {errors.timeFrame && <p className="text-red-500 text-sm">{errors.timeFrame.message}</p>}
            </div>
          </div>

          {/* Row 3: Size & Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Size <span className="text-red-500">*</span>
              </label>
              <select {...register('size')} className="w-full border px-4 py-2 rounded text-gray-800">
                <option value="">Choose Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-800">
                Quantity <span className="text-red-500">*</span>
              </label>
              <select {...register('quantity')} className="w-full border px-4 py-2 rounded text-gray-800">
                <option value="">Choose Quantity</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51+">51+</option>
              </select>
              {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
            </div>
          </div>

          {/* Row 4: Project Description (Textarea) */}
          <div className="text-left">
            <label className="block mb-1 font-medium text-gray-800">
              Please Describe Your Project <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('projectType')}
              placeholder="Choose a Project Type"
              className="w-full border px-4 py-3 rounded h-32 resize-none text-gray-800 placeholder-gray-400"
            />
            {errors.projectType && <p className="text-red-500 text-sm">{errors.projectType.message}</p>}
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-600">
            By submitting this form you agree to our{' '}
            <a href="#" className="text-blue-600 underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </p>

          {/* Submit Button */}
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            type="submit"
          >
            Submit Quote
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-600 text-sm">Quote submitted successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}
