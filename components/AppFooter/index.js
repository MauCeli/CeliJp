import styles from "./styles";
export default function AppFooter({ children }) {
  return (
    <>
    <div>
      <footer>
        <div className="footer-content">
          <ul>
            <li><a href="http://twitter.com/celijp" target="_blank"><img alt="Twitter" src="https://3.bp.blogspot.com/-UqgB6FGp3BQ/VtgbquSmikI/AAAAAAAADVI/fSrm_WzY6pk/s000/twitter.png" title="Twitter"/></a></li>
            <li><a href="http://facebook.com/celijp" target="_blank"><img alt="Facebook" src="https://4.bp.blogspot.com/-FK9iOIj1N_g/Vtgbq9JSvsI/AAAAAAAADVM/ZfftfHipqB4/s000/facebook.png" title="Facebook" /></a></li>
            <li><a href="http://gugleplu.com/celijp" target="_blank"><img alt="Google Plus" src="https://1.bp.blogspot.com/-IYv5YvW61jY/VtgbrC4xEcI/AAAAAAAADVQ/M9hEY34RG0U/s000/gplus.png" title="Google Plus"/></a></li>
            <li><a href="http://linkedin.com/celijp" target="_blank"><img alt="Linkedin" src="https://3.bp.blogspot.com/-DKzvG934XUA/VtgbrbcuEqI/AAAAAAAADVU/UNlYyM6y_-A/s000/linkedin.png" title="Linkedin" /></a></li>
            <li><a href="http://feedburner.com/celijp" target="_blank"><img alt="RSS" src="https://1.bp.blogspot.com/-IldpA5zDpz4/Vtgbrs-weHI/AAAAAAAADVY/BS9qlCp1tF4/s000/rss.png" title="RSS"/></a></li>
            <li><a href="mailto:hai@celijp.com" target="_blank"><img alt="Correo" src="https://4.bp.blogspot.com/-0L6bR_XdgbE/VtgbrkGvtqI/AAAAAAAADVc/8Q877lq1xbc/s000/email.png" title="Correo" /></a></li>
          </ul>
          <hr />
          日本語Celijp！・アルゼンチン・フフイから世界へ！ 
        </div>
      </footer>
    </div>
    <style jsx>{styles}</style>
    </>
  );
}