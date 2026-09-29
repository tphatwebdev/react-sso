import ReactJson from 'react-json-view'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="user-from-auth0">
        <div className="title">User from Auth0:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img className="user-avatar" src={'https://trungquandev.com/wp-content/uploads/2024/03/white-bg-main-avatar-circle-min-trungquandev-codetq-375.jpeg'} alt={'trungquandev'} />
          <div className="user-info">
            <p>Sub: <span className="value">google-oauth2|108184243235574894333</span></p>
            <p>Email: <span className="value">trantienphatabc@gmail.com</span></p>
            <p>Name: <span className="value">TranTienPhat</span></p>
          </div>
        </div>
        <div className="more-info">
          <ReactJson
            enableClipboard={false}
            collapsed={true}
            theme={'google'}
            src={{
              "given_name": "youngboizlowkey",
              "family_name": "Cats",
              "nickname": "Iris01",
              "name": "TranTienPhat",
              "picture": "https://i.pinimg.com/736x/3c/51/83/3c5183510e69367decf109abb37348de.jpg",
              "updated_at": "2024-07-10T09:59:37.603Z",
              "email": "phatstilllearning@gmail.com",
              "email_verified": true,
              "sub": "google-oauth2|108184243235574894333"
            }}
          />
        </div>
      </div>

      <div className="user-from-our-database">
        <div className="title">User from our database:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img className="user-avatar" src={'https://i.pinimg.com/736x/d5/2f/53/d52f536b526c344ecf86d8f482feb52c.jpg'} alt={'trantienphat'} />
          <div className="user-info">
            <p>ID: <span className="value">random-108184243235574894333</span></p>
            <p>Email: <span className="value">phattryhard@gmail.com</span></p>
            <p>Name: <span className="value">TranTienPhat</span></p>
          </div>
        </div>
        <div className="more-info">
          <ReactJson
            enableClipboard={false}
            collapsed={true}
            theme={'google'}
            src={{
              "given_name": "youngboizlowkey",
              "family_name": "Cats",
              "nickname": "Iris01",
              "name": "TranTienPhat",
              "picture": "https://i.pinimg.com/736x/3c/51/83/3c5183510e69367decf109abb37348de.jpg",
              "updated_at": "2024-07-10T09:59:37.603Z",
              "email": "phatstilllearning@gmail.com",
              "email_verified": true,
              "sub": "google-oauth2|108184243235574894333"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
