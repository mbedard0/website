import './App.css';
import 'animate.css';
import profilePic from './photo-website.jpg'
import playersIo from './players-io.png'
import backlog from './backlog.jpg'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content fixed w-full z-10">
        <div class="flex-none px-2 mx-2">
          <span class="text-lg font-bold">
            Meiling Bedard
          </span>
        </div>
        <div class="flex-1 px-10 mx-2">
          <div class="items-stretch hidden lg:flex">
            <a class="btn btn-ghost btn-sm rounded-btn" href='https://drive.google.com/file/d/1lraCPlOwTmSl2qLeTJpOyrqG6XN_5eex/view?usp=sharing'>
              CV
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href='https://github.com/mbedard0'>
              Github
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href='https://www.linkedin.com/in/f-meiling-bedard/'>
              LinkedIn
            </a>
          </div>
        </div>
        <div class="flex-none">
          <a href="mailto:meiling.bedard@gmail.com">
            <button class="btn btn-square btn-ghost mr-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <main className='w-9/12 m-auto'>
        <div className='hero min-h-screen'>
          <div className='hero-content'>
            <div class="max-w-md">
              <div class="avatar">
                <div class="mb-1 rounded-full w-48 h-48">
                  <img src={profilePic} />
                </div>
              </div>
              <h1 className='mt-10 mb-5 text-5xl animate__animated animate__slideInDown'>
                Hi, I'm Meiling
              </h1>
              <p className='mb-5'>
                I write code.
              </p>
              <div class="divider"></div>
              <div className='mt-20'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="animate__animated animate__pulse animate__delay-2s mx-auto bi bi-arrow-down-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-10'>
          <h2 className='text-3xl mb-5'>
            About Me
          </h2>
          <p>
            I am a software engineer based in New York City🏙. I build apps with JavaScript and Python. I used to be a writer and journalist, but now I mostly write code. I like soccer and food and making apps that combine those interests.
          </p>
        </div>
        <div class="divider"></div>
        <div>
          <h2 className='text-3xl mb-10'>
            Things I've Built
          </h2>
          <div class="card lg:card-side bordered">
            <figure>
              <div class="avatar">
                <img src={playersIo} alt='project screenshot'/>
              </div>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Players.io</h2>
              <p>
                Use this app to track the statistics of your favorite Premier League players, search by team or name, and even see the list of games this season. Add players to your Player List to easily follow them week in and out.
              </p>
              <div class="card-actions mx-auto">
                <a href="https://github.com/mbedard0/players-io">
                  <button class="btn btn-outline">GitHub</button>
                </a>
                <a href="https://players-io.herokuapp.com/">
                  <button class="btn btn-outline btn-primary">App</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bordered">
          <figure>
            <div class="avatar">
              <img src={backlog} alt='backlog app screenshot'/>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">Backlog</h2>
            <p>Backlog is a bug tracker app where users can submit and assign tickets to others, add comments to tickets, and mark tickets as completed when issues are resolved.</p>
            <div class="card-actions">
              <div class="card-actions mx-auto">
                <a href="https://github.com/mbedard0/Backlog-MERN-Stack/">
                  <button class="btn btn-outline">GitHub</button>
                </a>
                <a href="https://backlog-bugtracker-app.herokuapp.com/">
                  <button class="btn btn-outline btn-primary">App</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div>
          <h2 className='text-3xl mt-10 mb-5'>
            Get in touch
          </h2>
          <p>
            I'd love to hear from you.
          </p>
          <a href="mailto:meiling.bedard@gmail.com">
            <button class="btn btn-success mt-5 mb-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope mr-2" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              meiling.bedard@gmail.com
            </button>
          </a>
        </div>
      </main>
      <footer class="p-10 footer bg-neutral text-neutral-content">
        <p className='content-center'>
          © 2021 Meiling Bedard
        </p>
      </footer>
    </div>
  );
}

export default App;
