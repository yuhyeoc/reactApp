import styles from './CSSModule.module.scss';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className='something'>CSS Module!</span>
            <div className={styles.titleSize}>
                제목 타이틀
                <p className='subTitle'>
                    서브타이틀
                </p>
            </div>
        </div>
    );
};

export default CSSModule;