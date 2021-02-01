//to be included back on App.js

                  switch (card.supertype) {
                    case "Energy":
                      return(
                        <DetailedWrap
                          key={`Detailed+${card.id}`}
                          id={card.id}
                          activeDetail={detailedCard}
                        >
                          <DetailedWrap.Header>
                            <h2>{`Energy ${card.name}`}</h2>
                            <button
                              onClick={() =>{CloseDetailedScreen()}}
                            >
                              &times;
                            </button>
                          </DetailedWrap.Header>
                          <DetailedWrap.Content>
                            {Object.entries(card).map((key, value, index) => {
                              return(
                                <h3 key={card.id+index}>{`${key}`}</h3>
                              )
                            })}
                          </DetailedWrap.Content>
                        </DetailedWrap>
                      );
                      case "Pokémon":
                      return(
                        <DetailedWrap
                          key={`Detailed+${card.id}`}
                          id={card.id}
                          activeDetail={detailedCard}
                        >
                          <DetailedWrap.Header>
                            <h2>{`Pokémon ${card.name}`}</h2>
                            <button
                              onClick={() =>{CloseDetailedScreen()}}
                            >
                              &times;
                            </button>
                          </DetailedWrap.Header>
                          <DetailedWrap.Content>
                            {Object.entries(card).map((key, value, index) => {
                              return(
                                <h3 key={card.id+index}>{`${key}`}</h3>
                              )
                            })}
                          </DetailedWrap.Content>
                        </DetailedWrap>
                      );
                      case "Trainer":
                      return(
                        <DetailedWrap
                          key={`Detailed+${card.id}`}
                          id={card.id}
                          activeDetail={detailedCard}
                        >
                          <DetailedWrap.Header>
                            <h2>{`Trainer ${card.name}`}</h2>
                            <button
                              onClick={() =>{CloseDetailedScreen()}}
                            >
                              &times;
                            </button>
                          </DetailedWrap.Header>
                          <DetailedWrap.Content>
                            {Object.entries(card).map((key, value, index) => {
                              return(
                                <h3 key={card.id+index}>{`${key}`}</h3>
                              )
                            })}
                          </DetailedWrap.Content>
                        </DetailedWrap>
                      );
                  }