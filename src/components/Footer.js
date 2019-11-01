import React from 'react';

export default function Footer(props) {
  console.log('props are you there?', props);
  return (
    <div>
      <footer class="page-footer font-small bg-light">
        <div class="footer-copyright text-center py-3">
          <div>
            <i class="fa fa-heart"></i>
          </div>
          <p>© 2019 Copyright</p>
        </div>
      </footer>
    </div>
  );
}
