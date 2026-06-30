<template>
  <div class="container">
    <h1>Articles</h1>
    <div class="flex flex-col gap-8">
      <div v-for="article in articles" :key="article.id" class="article-card bg-white">
        <div
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :style="{ maxHeight: article.expanded ? '2000px' : '360px' }"
        >
          <div class="flex flex-col lg:flex-row">
            <!-- Métadonnées :
                 mobile  → ligne horizontale en haut (miniature petite + type/date à droite)
                 desktop → colonne gauche 30% -->
            <div
              class="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 p-4 border-b lg:border-b-0 lg:border-r border-gray-100 w-full lg:w-1/3 lg:flex-shrink-0"
            >
              <img
                :src="article.thumbnail"
                :alt="article.type"
                class="w-30 h-30 lg:w-full lg:h-70 object-cover flex-shrink-0"
              />
              <div class="lg:mt-3">
                <span class="type-badge">{{ article.type }}</span>
                <p class="text-sm text-gray-400 mt-1">{{ article.date }}</p>
              </div>
            </div>

            <!-- Contenu : pleine largeur mobile, 70% desktop -->
            <div class="w-full lg:w-2/3 p-4 lg:p-6">
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-content">{{ article.content }}</p>
            </div>
          </div>
        </div>

        <!-- CTA toujours visible -->
        <div class="border-t border-gray-100 px-6 py-3 flex justify-end">
          <button @click="article.expanded = !article.expanded" class="cta-btn">
            {{ article.expanded ? '▲ Réduire' : "▼ Lire tout l'article" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profilCharly from '@/assets/professeur-charly.jpg'

export default {
  name: 'Articles',
  data() {
    return {
      articles: [
        {
          id: 1,
          type: 'Réflexion du Professeur',
          date: '12 janvier 2025',
          thumbnail: profilCharly,
          title: 'Pourquoi tomber est la première leçon du judo',
          expanded: false,
          content: `La chute — ukemi — est sans doute la technique la plus importante que j'enseigne, et pourtant la moins glamour. Quand un élève arrive pour la première fois sur le tatami, il rêve de projections spectaculaires, de victoires en compétition. Ce que je lui apprends en premier, c'est comment toucher le sol sans se faire mal.

Il y a dans cette inversion une philosophie profonde. Le judo ne commence pas par apprendre à faire tomber l'autre : il commence par apprendre à tomber soi-même. C'est une métaphore de vie que Jigoro Kano avait parfaitement intégrée : avant de maîtriser, il faut accepter de ne pas maîtriser. Avant de projeter, accepter d'être projeté.

J'observe souvent que les élèves qui progressent le plus vite ne sont pas ceux qui ont la meilleure condition physique ou la plus grande combativité. Ce sont ceux qui n'ont pas peur de chuter. Ils essaient, ils tombent, ils se relèvent. Encore et encore. Cette absence de résistance à l'échec est précisément ce que le judo cherche à cultiver.

Au fil des années, j'ai vu des judokas techniques extraordinaires bloquer leur progression parce qu'ils refusaient de se laisser mettre en difficulté. À l'inverse, des élèves moins doués physiquement ont atteint de hauts niveaux simplement parce qu'ils acceptaient l'inconfort de l'apprentissage.

Tomber correctement, c'est aussi faire confiance à son partenaire. C'est accepter une forme de vulnérabilité partagée qui est au cœur du judo. Sans cette confiance, il n'y a pas de vrai randori — juste deux personnes qui se méfient l'une de l'autre.`,
        },
        {
          id: 2,
          type: 'Résultats Compétition',
          date: '21 octobre 2024',
          thumbnail: profilCharly,
          title: 'Interbudo 3ème au Championnat de Paris par équipes 2024',
          expanded: false,
          content: `Vendredi 18 octobre 2024, l'équipe mixte d'Interbudo a participé au Championnat de Paris de judo par équipes. À l'issue d'une journée intense et disputée, nous terminons à une magnifique 3ème place — une performance dont nous sommes très fiers collectivement.

L'équipe était composée de judokas adultes représentatifs de l'esprit du club : des ceintures marrons et noires, hommes et femmes, qui s'entraînent ensemble tout au long de l'année. Cette cohésion s'est parfaitement exprimée dans le format par équipes, où le soutien collectif et la solidarité comptent autant que la technique individuelle.

Le parcours du jour : victoire en quart de finale face à un club du 18ème arrondissement sur un score serré (3-2), demi-finale perdue face au futur champion sur une belle prestation adverse, et une 3ème place décrochée après une belle rencontre pour la petite finale.

Quelques performances individuelles ont particulièrement marqué la journée — plusieurs ippons spectaculaires obtenus par des membres du groupe adulte qui, rappelons-le, pratiquent le judo avant tout pour le plaisir et le dépassement de soi.

Cette médaille de bronze est une belle récompense pour l'investissement de toute l'équipe. Elle montre que notre approche — allier convivialité, rigueur technique et esprit de compétition sain — porte ses fruits. Rendez-vous en 2025 pour aller chercher encore plus haut !`,
        },
        {
          id: 3,
          type: 'Préceptes du Judo',
          date: '5 septembre 2024',
          thumbnail: profilCharly,
          title: 'Jita Kyoei — La prospérité mutuelle, fondement du judo',
          expanded: false,
          content: `Jigoro Kano, fondateur du judo en 1882, a bâti sa discipline sur deux principes fondateurs : Seiryoku Zenyo (l'utilisation optimale de l'énergie) et Jita Kyoei (la prospérité et le bien-être mutuels). Si le premier est souvent illustré par les techniques de projection — utiliser la force de l'adversaire plutôt que de lui opposer la sienne — le second est moins souvent expliqué, et pourtant tout aussi essentiel.

Jita Kyoei signifie littéralement "moi et les autres, prospérer ensemble". C'est l'idée que votre épanouissement personnel ne peut se faire au détriment de celui des autres, et que le groupe s'élève quand chaque individu s'élève. Sur le tatami, cela se traduit de manière très concrète : un partenaire d'entraînement n'est pas un adversaire à battre, c'est un collaborateur sans lequel votre progression serait impossible.

Cette philosophie distingue profondément le judo d'une simple activité sportive compétitive. Elle explique pourquoi la notion d'uchi-komi — répétition technique avec un partenaire coopératif — est centrale dans l'apprentissage. On ne progresse pas malgré l'autre, on progresse avec l'autre.

À Interbudo, nous essayons de cultiver cet esprit au quotidien. C'est pourquoi les ceintures noires passent du temps à travailler avec les débutants, pourquoi les parents restent parfois après les cours d'enfants pour partager un moment ensemble, pourquoi nous organisons des moments de vie commune en dehors du tatami.

Le judo, dans son essence, est une école de la relation à l'autre. Avant d'être un sport, c'est une façon d'être au monde.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 95%;
  @media (min-width: 1440px) {
    max-width: 75%;
  }
}
.article-card {
  border: 1px solid #cdced0;
  box-shadow: rgb(200, 200, 200) 0px 0px 8px;
}
.type-badge {
  display: inline-block;
  background-color: #d74340;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 20px;
}
.article-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #d74340;
  margin-bottom: 12px;
}
.article-content {
  font-size: 1rem;
  color: #374151;
  line-height: 1.7;
  white-space: pre-line;
}
.cta-btn {
  font-size: 0.9rem;
  font-weight: 600;
  color: #d74340;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.cta-btn:hover {
  opacity: 0.7;
}
</style>
