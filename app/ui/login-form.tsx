"use client";
import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 px-6 pt-8 pb-4 bg-gray-50 rounded-lg">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="block mt-5 mb-3 text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="block pl-10 w-full text-sm rounded-md border border-gray-200 peer py-[9px] outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="block mt-5 mb-3 text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="block pl-10 w-full text-sm rounded-md border border-gray-200 peer py-[9px] outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="absolute left-3 top-1/2 text-gray-500 -translate-y-1/2 pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto w-5 h-5 text-gray-50" />
        </Button>
        <div className="flex items-end space-x-1 h-8">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
