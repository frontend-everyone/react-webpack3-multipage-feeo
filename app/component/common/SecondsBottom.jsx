import React from 'react';

const SecondsBottom = ({seconds}) =>
    <div className="bottom">
        {seconds <= 5 ? "小于等于5" : " 大于5"}的Seconds: {seconds}
    </div>
;
export default SecondsBottom;


