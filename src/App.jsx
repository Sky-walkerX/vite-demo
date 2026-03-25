import './App.css'

function App() {
  return (
    <>
      <header className="topbar">
        <p className="brand">RacePulse F1</p>
        <nav>
          <a href="#calendar">Calendar</a>
          <a href="#teams">Teams</a>
          <a href="#strategy">Strategy</a>
          <a href="#newsletter">Newsletter</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">2026 Formula 1 fan hub</p>
          <h1>Everything you need for race weekend in one page</h1>
          <p className="lead">
            Follow the calendar, keep an eye on constructors, and understand pit
            strategy trends without jumping across multiple pages.
          </p>
          <div className="hero-cta">
            <a className="button primary" href="#calendar">
              View next race
            </a>
            <a className="button ghost" href="#newsletter">
              Join updates
            </a>
          </div>
        </section>

        <section className="stats" aria-label="Season highlights">
          <article>
            <h2>24</h2>
            <p>scheduled grands prix in a globe-spanning 2026 calendar</p>
          </article>
          <article>
            <h2>10</h2>
            <p>teams chasing points in every qualifying and race session</p>
          </article>
          <article>
            <h2>3</h2>
            <p>tyre compounds shaping race-day strategy and pit windows</p>
          </article>
        </section>

        <section className="features" id="calendar">
          <header>
            <p className="eyebrow">Race calendar</p>
            <h2>Upcoming weekends to keep on your radar</h2>
          </header>
          <div className="feature-grid">
            <article className="card">
              <h3>Monaco Grand Prix</h3>
              <p>
                Street circuit precision, minimal overtaking margin, and high
                qualifying importance through every sector.
              </p>
            </article>
            <article className="card">
              <h3>Silverstone Grand Prix</h3>
              <p>
                High-speed corners and variable weather can flip strategy calls
                in the final laps.
              </p>
            </article>
            <article className="card">
              <h3>Suzuka Grand Prix</h3>
              <p>
                Technical sections and tyre degradation make balancing pace and
                consistency critical.
              </p>
            </article>
          </div>
        </section>

        <section className="features" id="teams">
          <header>
            <p className="eyebrow">Constructors watch</p>
            <h2>Teams to track this season</h2>
          </header>
          <div className="feature-grid">
            <article className="card">
              <h3>Red Bull Racing</h3>
              <p>
                Known for aggressive aero development and strong race pace in
                mixed conditions.
              </p>
            </article>
            <article className="card">
              <h3>Ferrari</h3>
              <p>
                Frequent front-row contenders with a constant focus on tyre life
                management.
              </p>
            </article>
            <article className="card">
              <h3>McLaren</h3>
              <p>
                Rapid mid-season upgrades and improving qualifying form keep them
                in podium battles.
              </p>
            </article>
          </div>
        </section>

        <section className="process" id="strategy">
          <header>
            <p className="eyebrow">Race strategy</p>
            <h2>How wins are built over 300 kilometers</h2>
          </header>
          <ol>
            <li>
              <h3>1. Qualifying setup</h3>
              <p>
                Teams tune balance for one-lap speed while preserving tyre
                confidence for the opening race stint.
              </p>
            </li>
            <li>
              <h3>2. Pit stop timing</h3>
              <p>
                The undercut and overcut battle often decides position long
                before the checkered flag drops.
              </p>
            </li>
            <li>
              <h3>3. Final-stint execution</h3>
              <p>
                Drivers manage battery, tyres, and overtakes while reacting to
                safety cars and late-race pressure.
              </p>
            </li>
          </ol>
        </section>

        <section className="contact" id="newsletter">
          <p className="eyebrow">Stay on the grid</p>
          <h2>Get Formula 1 race-week updates</h2>
          <p>
            Receive quick previews, strategy snapshots, and post-race summaries
            directly in your inbox.
          </p>
          <a className="button primary" href="mailto:pitwall@racepulsef1.com">
            pitwall@racepulsef1.com
          </a>
        </section>
      </main>

      <footer>
        <p>RacePulse F1</p>
        <p>Single-page Formula 1 website built with React and no router.</p>
      </footer>
    </>
  )
}

export default App
