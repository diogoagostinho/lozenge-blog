import { Button, Label, TextInput } from "flowbite-react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex w-full h-screen">
          <div className="bg-gradient-to-r from-pink-500  to-orange-500 w-1/3"></div>
          <div className="px-6 w-2/3 align-middle text-center flex flex-col md:items-center">
            <p className="mt-6 font-bold text-2xl">Sign Up</p>
            <p className="text-xs px-8 opacity-50 pt-2 font-regular">
              This a demo project, in which you can register and login with an
              account (using your email or google account), it's completely safe
              and has password encryption
            </p>
            <form className="flex flex-col gap-3 text-start pt-6 md:w-80">
              <div>
                <Label className="pl-1" value="Write a username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <Label className="pl-1" value="Write your email" />
                <TextInput type="text" placeholder="Email" id="email" />
              </div>
              <div>
                <Label className="pl-1" value="Write a password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <Button gradientDuoTone="pinkToOrange">Register</Button>
              <Button outline gradientDuoTone="pinkToOrange">
                <p className="flex items-center text-center gap-3">
                  <BsGoogle /> Sign Up with Google
                </p>
              </Button>
            </form>
            <div className="flex mt-4">
              <p className="text-sm font-semibold">Already have an account?</p>
              <Link to="/sign-in">
                <p className="text-pink-500 hover:text-orange-500 pl-2 text-sm font-semibold">
                  Sign In
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
