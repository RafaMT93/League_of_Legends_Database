import React from 'react';
import Lore from './ChampionLore';
import ChampionInfo from './ChampionInfo';
import {
  WrapperChampionDiv,
  WrapperSkills,
  WrapperSkillsH1,
  WrapperSkillsH2,
} from './styled';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { SEARCH_CHAMPION } from '../../API';

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
        />
        <WrapperSkills>
          <WrapperSkillsH1>Skills</WrapperSkillsH1>

          <Tabs>
            <TabList>
              <Tab>{data.data[params.name].passive.name}</Tab>
              {data.data[params.name].spells.map((x, index) => {
                return <Tab key={index}>{x.name}</Tab>;
              })}
            </TabList>

            <TabPanel>
              <WrapperSkillsH2>
                {data.data[params.name].passive.description}
              </WrapperSkillsH2>
            </TabPanel>

            {data.data[params.name].spells.map((x, index) => {
              return (
                <TabPanel key={index}>
                  <WrapperSkillsH2>{x.description}</WrapperSkillsH2>

                  <WrapperSkillsH2>
                    <b>Cooldown:</b> {x.cooldown.join(' / ')}
                  </WrapperSkillsH2>

                  <WrapperSkillsH2>
                    <b>
                      {data.data[params.name].partype === 'Mana'
                        ? 'Custo de Mana: '
                        : 'Custo de Energia: '}
                    </b>
                    {x.cost.join(' / ')}
                  </WrapperSkillsH2>

                  <WrapperSkillsH2>
                    <b>Range:</b> {x.range.join(' / ')}
                  </WrapperSkillsH2>
                </TabPanel>
              );
            })}
          </Tabs>
        </WrapperSkills>
        <p>{console.log(data.data[params.name])}</p>
      </>
    );
  return null;
};

export default Champion;
