import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import { getRandomHexColor } from 'utils/getRandomColor';




  export default function Statistics({ title, stats }) {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.statlist}>
          {stats.map(item => (
            <li
              key={item.id}
              style={{
                backgroundColor:
                  getRandomHexColor(),
              }}
              className={css.item}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}> {item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ).isRequired,
  };