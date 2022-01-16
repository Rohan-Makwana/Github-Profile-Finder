import logo from "../../images/abt-img.png";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className=" flex w-full h-auto justify-center align-center p-4">
      <div className="flex flex-col w-full justify-center align-center flex-wrap md:flex-row">
        <div className="card rounded-sm card-border bg-base-200 shadow-xl hover:shadow-2xl flex flex-col p-4 m-2 flex-wrap">
          <div className="avatar w-full text-center">
            <div className="mb-8 mx-auto rounded-full w-24 h-24 shadow-lg ring ring-success ring-offset-base-100 ring-offset-2">
              <img src={`${logo}`} />
            </div>
          </div>
          <p className="text-3xl font-bold text-center font-mono">
            Rohan Makwana
          </p>
        </div>
        <div className="card rounded-sm card-border bg-base-200 shadow-xl hover:shadow-2xl align-center flex flex-col p-4 m-2 flex-wrap">
          <p className="text-3xl font-bold text-center m-2 font-mono">
            Github Profile Finder
          </p>
          <p className="text-sm text-center m-2 font-mono">
            A simple React Website to find & browse Github User Profiles. <br />
            This is a project inspired by{" "}
            <a
              href="https://github.com/bradtraversy/github-finder-app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
            >
              Brad Traversy's
            </a>{" "}
            'React Front to Back 2022' course.
          </p>
          <a
            href="https://github.com/Rohan-Makwana/Github-Profile-Finder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mx-auto w-fit text-md text-center m-2 font-mono hover:shadow-xl"
          >
            <FaGithub className="mx-2" />
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
