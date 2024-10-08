import { Container, Tab, Tweets } from './styles';

import { Post } from '../Post';

export function Feed() {
  return (
    <Container>
      <Tab>PLANTANDO VIDA</Tab>
      <Tweets>
        <Post
          ImageUrl={
            "https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/reflorestamento-mn/home/forest01.jpg"
          }
          description={
            `Conservação de Florestas Nativas
Estimular o uso sustentável de florestas nativas e plantadas; Valorizar os aspectos ambientais, sociais e econômicos dos serviços e dos benefícios proporcionados pelas florestas públicas e privadas; Estimular a proteção da biodiversidade e dos ecossistemas florestais.`
          }
        />

        {/* <Post
          ImageUrl={
            'https://scontent.fppb8-1.fna.fbcdn.net/v/t1.6435-9/101648416_121289879594323_6247069042004197376_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeH2xcyFHJlB4HM822A1u43xT_msridbLg5P-ayuJ1suDosihNNE0seIj2k7oSj20LFuEYpCBCpDthtO-yJ1nr7H&_nc_ohc=uaDmLgEEIGcAX_bSVW7&_nc_ht=scontent.fppb8-1.fna&oh=00_AT_bsMhFUD3kReKz4sMawA6BQ0tP_YIhnhziMUsJrEmq8g&oe=62E5F06E'
          }
          description={
            "Sangra d'água, é uma planta ótima para o reflorestamento, pois seu crescimento é desenvolvido rapidamente."
          }
        /> */}

        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </Tweets>
    </Container>
  );
}
