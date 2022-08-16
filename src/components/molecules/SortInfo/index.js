import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SortInfo = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space
}) => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>{title ? title : 'Select Algorithm'}</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ? (
            description
          ) : (
            <p>
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
            </p>
          )}
        </article>

        <div className="SortInfo__Aside">
          <h2>Performance</h2>
          <table>
            <th>Time complexity</th>
            <tbody>
              
              <tr>
                <td>Worst-case:</td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>

              <tr>
                <td>Average:</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>

              <tr>
                <td>Best-case:</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>
              
              <th>Space complexity</th>
              <tr>
                <td>Worst-case:</td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object
};

export default SortInfo;
