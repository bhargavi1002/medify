import React, {useState} from 'react';
import styles from './SpecializationSection.module.css'
import Card from '../Card/Card';
import Drugstore from '../../assets/Drugstore.png'
import Stethoscope from '../../assets/Stethoscope.png'
import Bloodsample from '../../assets/Bloodsample.png'
import HeartRateMonitor from '../../assets/HeartRateMonitor.png'
import HeartRate from '../../assets/HeartRate.png'
import Immune from '../../assets/Immune.png'
import Xray from '../../assets/Xray.png'


function SpecializationSection() {
    const [showAll, setShowAll] = useState(false);

    const gridItems = [
        { id: 1, src: Drugstore, text: 'Blood Test' },
        { id: 2, src: Stethoscope, text: 'Primary Care' },
        { id: 3, src: HeartRate, text: 'Cardiology' },
        { id: 4, src: HeartRateMonitor, text: 'MRI Resonance' },
        { id: 5, src: Bloodsample, text: 'Blood Test' },
        { id: 6, src: Immune, text: 'Piscologist' },
        { id: 7, src: Drugstore , text: 'Laboratory' },
        { id: 8, src: Xray, text: 'X-Ray' },
        { id: 9, src: Drugstore, text: 'Blood Test' },
        { id: 10, src: Stethoscope, text: 'Primary Care' },
        { id: 11, src: HeartRate, text: 'Cardiology' },
        { id: 12, src: HeartRateMonitor, text: 'MRI Resonance' },
        { id: 13, src: Bloodsample, text: 'Blood Test' },
        { id: 14, src: Immune, text: 'Piscologist' },
        { id: 15, src: Drugstore , text: 'Laboratory' },
        { id: 16, src: Xray, text: 'X-Ray' },
        { id: 17, src:  Drugstore, text: 'Blood Test' },

    ]
  return (
    <section className={styles.specializationSection}>
      <div className={styles.elementsContainer}>
      <h2>Find By Specialization</h2>
      <div className={styles.gridContainer}>
                {gridItems.slice(0, showAll ? gridItems.length : 8).map((item) => (
                    <div key={item.id} className={styles.specializationContainer}>
                        <Card key={item.id} imageSrc={item.src} text={item.text} />
                    </div>
                ))}
            </div>
            <button className={styles.btnSecondary} onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'View All'}
            </button>
            </div>
    </section>
  );
}

export default SpecializationSection;
