import React from 'react';

function Checkbox({ onChange, text, checked }) {
  return (
    <div className="checkbox-block">
      <label>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="checkbox-circle">
          <span className="icon icon-check-mark" />
        </span>
        <span className="checkbox-text">{text}</span>
      </label>
    </div>
  );
}

function Skill({ title, onRemove, onEdit }) {
  return (
    <div>
      <div className="skill-subcat skill-subcat--item">
        <div className="flexbox justify-space-between">
          <div className="skill-block">
            <div className="skill-block-title">{title}</div>
            <div className="skill-block-list">
              <form>
                <Checkbox text="lorem" />
              </form>
            </div>
          </div>
          <div className="skill-sub-block">
            <div className="skill-block-title">Skills</div>
            {/* <div className="skill-tags-block clearfix">
              <div className="skill-tag">Math</div>
              <div className="skill-tag">Trigonometry</div>
              <div className="skill-tag">Calculus</div>
              <div className="skill-tag">Trigonometry</div>
              <div className="skill-tag">Calculus</div>
              <div className="skill-tag">Trigonometry</div>
              <div className="skill-tag">Calculus</div>
              <div className="skill-tag">Math</div>
            </div> */}
          </div>
        </div>
        <div className="skill-block-footer">
          <button type="button" className="btn-reset" onClick={onRemove}>
            Delete
          </button>
          <button type="button" className="btn-reset" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

function FirstStep({ skillList, onRemoveSkill, onEditSkill }) {
  return (
    <div>
      {skillList.map(({ id, title }) => (
        <Skill
          key={id}
          title={title}
          onRemove={() => onRemoveSkill(id)}
          onEdit={() => onEditSkill(id)}
        />
      ))}
    </div>
  );
}

export default FirstStep;
