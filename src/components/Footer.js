import React from 'react';

export default function Footer(props) {
  console.log('props are you there?', props);
  return (
    <div>
      <footer className="page-footer font-small bg-light">
        <div className="footer-copyright text-center py-3">
          <div>
            <i className="fa fa-heart"></i>
          </div>
          <p>© 2019 Copyright</p>
        </div>
      </footer>
    </div>
  );
}
