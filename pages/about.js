import Sample from 'components/sample1'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain } from 'components/two-column'

export default function About () {
  return (
    <Container>
      <Sample title='Sample Website' />

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>heading</h2>
            <p>
              これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
            </p>
            <p>
              これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
            </p>
            <h3>Heading 2</h3>
            <p>
              これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
            </p>
            <p>
              これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。
            </p>
          </PostBody>
        </TwoColumnMain>
        <Contact />
        <h4>&copy; 2023 Masato Yonaha All Rights Reserved. </h4>
      </TwoColumn>
    </Container>
  )
}
