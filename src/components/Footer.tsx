import dayjs from "dayjs";

function Footer() {
  let now = dayjs().format("YYYY");
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 rounded-lg' />
      <div className='mx-auto py-2 text-center'>
        <p className='font-semibold'>&copy; {now}</p>
        <p className='font-light'>Made with 💖 by Nurul Huda</p>
      </div>
    </footer>
  );
}

export default Footer;
