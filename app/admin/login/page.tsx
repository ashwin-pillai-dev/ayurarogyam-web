"use client";
import { useMutation, gql } from "@apollo/client";
import { useCallback, useState } from "react";



// "use client"

import DefaultFooter from "../../components/footer";
import { signIn } from './actions'
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function page() {
    const LOGIN_MUTATION = gql`
                            mutation Mutation($email: String!, $password: String!) {
                            loginAdmin(email: $email, password: $password) {
                                                token
                                                    }
} `
    const [login, { data }] = useMutation(LOGIN_MUTATION);

    async function onSubmit(formData: FormData) {

        debugger
        console.log(formData);
        // console.log(formData.email);



        // 'use server'

        const formDataObject: any = {};

        for (const [key, value] of formData.entries()) {
            formDataObject[key] = value;
        }
        console.log(formDataObject);

        try {
            const response = await login({variables:formDataObject})
            console.log(response.data);


        } catch (error: any) {
            throw new Error('Error loggin in' + error.message)

        }



    }










    return (
        <section className="bg-gray-50 dark:bg-gray-900 my-0 py-0 ">
            <div className="flex flex-col items-center justify-between   h-screen  mx-auto  lg:py-0">
                <div className="flex flex-col items-center justify-center w-full  h-full">
                    <div className="w-full bg-white rounded-lg shadow dark:border  sm:max-w-md xl:py-0 dark:bg-gray-800 dark:border-gray-700 ">
                        <div className="px-6 space-x-4 md:space-x-6 ">
                            <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <Image height={500} width={130} className="h-32 max-w-full rounded-lg" src="/ayur-arogyam-logo.png" alt="image description" />
                            </a>
                            <h1 className="text-xl font-bold leading-tight mb-4 tracking-tight place-self-center text-primary-700 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="md:space-y-6 mb-8" action={async (data) => {
                                // e.pre
                                await onSubmit(data);
                                // console.log(data);


                            }}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                {/* <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Forgot password?
                                </a>
                            </div> */}
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign in
                                </button>
                                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up
                                </a>
                            </p> */}
                            </form>
                        </div>
                    </div>
                </div>
                <DefaultFooter />
            </div>

        </section>
    );
}


