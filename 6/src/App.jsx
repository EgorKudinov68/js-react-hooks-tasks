import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const Factorial = ({ number }) => {
  const factorialFunc = (n) => {
    if (n <= 0) return 1;
    return n * factorialFunc(n - 1);
  };

  return (
    <div>
      Factorial of {number} is {factorialFunc(number)}
    </div>
  );
};

const FactorialSelector = ({ onSelect }) => {
  const { t } = useTranslation();

  return (
    <div className="btn-group mb-3" role="group">
      {[1, 5, 10, 20].map((number) => (
        <button
          key={number}
          type="button"
          className="btn btn-outline-primary"
          onClick={() => onSelect(number)}
        >
          {`${t('factorial')} ${number}`}
        </button>
      ))}
    </div>
  );
};

const LanguageSwitcher = ({ children }) => {
  const { t, i18n } = useTranslation();

  const handleLangSwitch = (e) => {
    i18n.changeLanguage(e.target.dataset.testid);
  };

  const getClassName = (lang) => (
    i18n.language === lang
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  );

  return (
    <>
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          data-testid="en"
          className={getClassName('en')}
          onClick={handleLangSwitch}
        >
          {t('languages.en')}
        </button>
        <button
          type="button"
          data-testid="ru"
          className={getClassName('ru')}
          onClick={handleLangSwitch}
        >
          {t('languages.ru')}
        </button>
      </div>
      <br />
      {children}
    </>
  );
};

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <LanguageSwitcher>
        <FactorialSelector onSelect={setValue} />
        <Factorial number={value} />
      </LanguageSwitcher>
    </div>
  );
};
// END

export default App;
