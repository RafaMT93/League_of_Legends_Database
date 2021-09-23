import React from 'react';
import Lore from './ChampionLore';
import ChampionInfo from './ChampionInfo';
import ChampionSkills from './ChampionSkills';

import 'react-tabs/style/react-tabs.css';

import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { SEARCH_CHAMPION } from '../../API';
import { WrapperChampionDiv } from './styled';

const Champion = ({ version }) => {
  const params = useParams();
  const { data, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchChampions() {
      const { url, options } = SEARCH_CHAMPION(version, params.name);
      request(url, options);
    }
    fetchChampions();
  }, [params.name, request, version]);

  if (loading) return <p>Loading...</p>;
  if (data)
    return (
      <>
        <WrapperChampionDiv
          image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`}
        >
          <ChampionInfo
            attack={data.data[params.name].info.attack}
            defense={data.data[params.name].info.defense}
            difficulty={data.data[params.name].info.difficulty}
            magic={data.data[params.name].info.magic}
            tags={data.data[params.name].tags}
            partype={data.data[params.name].partype}
          />
        </WrapperChampionDiv>
        <Lore
          name={data.data[params.name].name}
          title={data.data[params.name].title}
          lore={data.data[params.name].lore}
          allytips={data.data[params.name].allytips}
          enemytips={data.data[params.name].enemytips}
          armor={data.data[params.name].stats.armor}
          armorperlevel={data.data[params.name].stats.armorperlevel}
          attackdamage={data.data[params.name].stats.attackdamage}
          attackdamageperlevel={
            data.data[params.name].stats.attackdamageperlevel
          }
          attackrange={data.data[params.name].stats.attackrange}
          attackspeed={data.data[params.name].stats.attackspeed}
          attackspeedperlevel={data.data[params.name].stats.attackspeedperlevel}
          crit={data.data[params.name].stats.crit}
          critperlevel={data.data[params.name].stats.critperlevel}
          hp={data.data[params.name].stats.hp}
          hpperlevel={data.data[params.name].stats.hpperlevel}
          hpregen={data.data[params.name].stats.hpregen}
          hpregenperlevel={data.data[params.name].stats.hpregenperlevel}
          movespeed={data.data[params.name].stats.movespeed}
          mp={data.data[params.name].stats.mp}
          mpperlevel={data.data[params.name].stats.mpperlevel}
          mpregen={data.data[params.name].stats.mpregen}
          mpregenperlevel={data.data[params.name].stats.mpregenperlevel}
          spellblock={data.data[params.name].stats.spellblock}
          spellblockperlevel={data.data[params.name].stats.spellblockperlevel}
        />

        <ChampionSkills
          version={version}
          passiveImg={`http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${
            data.data[params.name].passive.image.full
          }`}
          altPassive={data.data[params.name].passive.name}
          titlePassive={data.data[params.name].passive.name}
          passiveDescription={data.data[params.name].passive.description}
          spells={data.data[params.name].spells}
          partype={data.data[params.name].partype}
        />
        <p>{console.log(data.data[params.name])}</p>
      </>
    );
  return null;
};

export default Champion;
