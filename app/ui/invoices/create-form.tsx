"use client";
import { CustomerField } from "@/app/lib/definitions";
import { useActionState } from "react";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createInvoice, State } from "@/app/lib/actions";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);
  return (
    <form action={formAction}>
      <div className="p-4 bg-gray-50 rounded-md md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="block mb-2 text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              required
              id="customer"
              name="customerId"
              className="block py-2 pl-10 w-full text-sm rounded-md border border-gray-200 cursor-pointer peer outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px]" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="block py-2 pl-10 w-full text-sm rounded-md border border-gray-200 peer outline-2 placeholder:text-gray-500"
                required
              />
              <CurrencyDollarIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="block mb-2 text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="py-3 bg-white rounded-md border border-gray-200 px-[14px]">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  required
                  name="status"
                  type="radio"
                  value="pending"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="flex gap-1.5 items-center py-1.5 px-3 ml-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-full cursor-pointer"
                >
                  Pending <ClockIcon className="w-4 h-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  required
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 cursor-pointer focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="flex gap-1.5 items-center py-1.5 px-3 ml-2 text-xs font-medium text-white bg-green-500 rounded-full cursor-pointer"
                >
                  Paid <CheckIcon className="w-4 h-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex gap-4 justify-end mt-6">
        <Link
          href="/dashboard/invoices"
          className="flex items-center px-4 h-10 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
