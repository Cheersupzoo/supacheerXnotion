const DraftBadge = () => (
  <span className='draft-badge'>
    draft
    <style global jsx>
      {`
        .draft-badge {
          background: #ff6161;
          color: white;
          font-weight: 400;
          font-size: 0;
          padding: 2px;
          position: absolute;
          top: -3px;
          left: -60px;
          border-radius: 2px;
        }
      `}
    </style>
  </span>
)

export default DraftBadge
