

export default function ActiveQuest({ }: {}) {
  return (
    <div className="active-quest" data-aos="fade-up">
      <h2 className="active-quest-title bage" data-label="Micro-Interactions">active quest</h2>
      <div className="active-quest-content">
        <div className="active-quest-item">
          <span>quest name</span>
          <p className="text-primary">Extensive Interactivity</p>
        </div>
        <div className="active-quest-item">
          <span>Mission</span>
          <p>To elevate user experiences by pioneering extensive interactivity in UI/UX design. I strive to create interfaces that are not just usable, but truly engaging and dynamic.</p>
        </div>
        <div className="active-quest-item">
          <span>rewards</span>
          <div className="rewards">
            <ul>
              <li>
                <img src="/reward-icon-1.png" title="Bot production" alt="" />
                <p>+3</p>
              </li>
              <li>
                <img src="/reward-icon-2.png" title="Automation" alt="" />
                <p>+25</p>
              </li>
              <li>
                <img src="/reward-icon-3.png" title="Landing pages" alt="" />
                <p>+563</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}