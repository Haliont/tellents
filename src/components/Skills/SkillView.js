import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../utils';
import ChooseControl from './ChooseControl';

function SkillView({
  name, categories, onRemove, onEdit,
}) {
  return (
    <div>
      <div className="skill-subcat skill-subcat--item">
        <div className="flexbox justify-space-between">
          <div className="skill-block">
            <div className="skill-block-title">{name}</div>
            <div className="skill-block-list">
              {categories.map(({ id, name: categoryName }) => (
                <ChooseControl
                  key={id}
                  checked
                  onChange={noop}
                  title={categoryName}
                />
              ))}
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
          <a type="button" onClick={onRemove} className="btn-reset" href="javascript:void(0);">
            Delete
          </a>
          <a type="button" onClick={onEdit} className="btn-reset" href="javascript:void(0);">
            Edit
          </a>
        </div>

      </div>
    </div>
  );
}

SkillView.propTypes = {
  name: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default SkillView;
