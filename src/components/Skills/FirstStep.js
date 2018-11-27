import React from 'react';

function FirstStep() {
  return (
    <div>
      <div className="skill-subcat skill-subcat--item">
        <div className="flexbox justify-space-between">
          <div className="skill-block">
            <div className="skill-block-title">Math &amp; Science</div>
            <div className="skill-block-list">
              <form>
                <div className="checkbox-block">
                  <input type="checkbox" id="math-1" defaultChecked />
                  <label htmlFor="math-1">
                    <span className="checkbox-circle">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="math-2" defaultChecked />
                  <label htmlFor="math-2">
                    <span className="checkbox-circle">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="math-3" defaultChecked />
                  <label htmlFor="math-3">
                    <span className="checkbox-circle">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="math-4" defaultChecked />
                  <label htmlFor="math-4">
                    <span className="checkbox-circle">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                  </label>
                </div>
                <div className="checkbox-block">
                  <input type="checkbox" id="math-5" defaultChecked />
                  <label htmlFor="math-5">
                    <span className="checkbox-circle">
                      <span className="icon icon-check-mark" />
                    </span>
                    <span className="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="skill-sub-block">
            <div className="skill-block-title">Skills</div>
            <div className="skill-tags-block clearfix">
              <div className="skill-tag">Math</div>
              <div className="skill-tag">Trigonometry</div>
              <div className="skill-tag">Calculus</div>
              <div className="skill-tag">Trigonometry</div>
              <div className="skill-tag">Calculus</div>
              <div className="skill-tag">Trigonometry</div>
              <div className="skill-tag">Calculus</div>
              <div className="skill-tag">Math</div>
            </div>
          </div>
        </div>
        <div className="skill-block-footer">
          <a href="#">View More</a>
          <a href="#">Edit</a>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
