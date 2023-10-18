import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imagem1 from './fotos/i1.jpg';
import imagem2 from './fotos/i2.webp';
import imagem6 from './fotos/i6.jpg';
import imagem7 from './fotos/i7.jpg';
import imagem8 from './fotos/i8.jpg';
import imagem13 from './fotos/i13.jpg';
import imagem14 from './fotos/i14.jpg';
import imagem16 from './fotos/i16.jpg';

const Comentariohn = () => {
  const comments = [
    {
      id: '7',
      image: imagem6,
      name: 'Giovana Souza Carvalho',
      text: 'Alguém sabe se é realmente verdade?',
      likes: 179,
      replies: [
        {
            id: '2',
            image: imagem14,
            name: 'Rafaela Gonçalves',
            text: 'Sim amiga, quando o botão aparece é pra vc ter acesso ao APP, e é incrível, consegui perder 12 quilos!!',
            likes: 38,
          },
      ],
    },
    {
      id: '9',
      image: imagem7,
      name: 'Manuela Lima Cardoso',
      text: 'Faz quase 2 meses que comecei e já perdi 16 kg!',
      likes: 46,
      replies: [
        {
            id: '1',
            image: imagem13,
            name: 'Bianca Gonçalves',
            text: 'Finalmente algo que funciona. É tão incrível que até minha mãe conseguiu ter resultado, ela já queimou 9kg.',
            likes: 71,
          },
          {
            id: '103',
            image: imagem1,
            name: 'Leila Alves Barros',
            text: 'Mais alguém teve resultados? Eu procurei e achei essas pesquisas que a Fernanda fala, e queria saber o resultado de quem já fez.',
            likes: 77,
          },
          {
            id: '4',
            image: imagem16,
            name: 'Carolina Araujo Castro',
            text: 'Minhas amigas fizeram e tiveram ótimos resultados, eu começo hoje!',
            likes: 63,
          },
          {
            id: '322',
            image: imagem2,
            name: 'Rafaela Azevedo',
            text: 'Eu to fazendo faz 2 semanas e já perdi 7 quilo',
            likes: 52,
          },
      ],
    },
    {
      id: '15',
      image: imagem8,
      name: 'Beatrice Rodrigues',
      text: 'Meninaa, que coisa mais incrível. Finalmente alguém que explica o verdadeiro problema e trás a solução. Nunca tive resultado tão rápido e fácil, eu estou indicando pra todo mundo que conheço.',
      likes: 324,
      replies: [],
    },
  ];

  return (
    <div className='comments'>
      <div className='container'>
        <div className='fb-comments'>
          <div className='fb-comments-header'>
            <span> 8 de 734 comentários</span>
          </div>
          <section className='fb-comments' id='2'>
            {comments.slice(0).map((comment) => (
              <div>
                <div className='fb-comments-wrapper' key={comment.id}>
                  <table className='fb-comments-comment'>
                    <tbody>
                      <tr>
                        <td rowspan='3' className='fb-comments-comment-img'>
                          <Image src={comment.image} width={48} />
                        </td>
                        <td>
                          <font className='fb-comments-comment-name'>
                            <name>{comment.name}</name>
                          </font>
                        </td>
                      </tr>
                      <tr>
                        <td className='fb-comments-comment-text'>
                          {comment.text}
                        </td>
                      </tr>
                      <tr>
                        <td className='fb-comments-comment-actions'>
                          <div className='icon-like'>
                            <img
                              class='x16dsc37'
                              height='18'
                              role='presentation'
                              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                              width='18'
                            />
                          </div>
                          <div className='icon-love'>
                            <img
                              class='x16dsc37'
                              height='18'
                              role='presentation'
                              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                              width='18'
                            />
                            <div className='qnt' style={{ float: 'right' }}>
                              {comment.likes}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {comment.replies?.map((reply) => (
                    <div className='fb-comments-mini' key={reply.id}>
                      <div className='myClass'></div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >
                        <div className='linha-vertical'></div>
                        <table
                          className='fb-comments-comment'
                          style={{ marginLeft: '20px' }}
                        >
                          <tbody>
                            <tr>
                              <td
                                rowspan='3'
                                className='fb-comments-comment-img'
                              >
                                <Image src={reply.image} width={48} />
                              </td>
                              <td>
                                <font className='fb-comments-comment-name'>
                                  <name>{reply.name}</name>
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td className='fb-comments-comment-text'>
                                {reply.text}
                              </td>
                            </tr>
                            <tr>
                              <td className='fb-comments-comment-actions'>
                                <div className='icon-like'>
                                  <img
                                    class='x16dsc37'
                                    height='18'
                                    role='presentation'
                                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                                    width='18'
                                  />
                                </div>
                                <div className='icon-love'>
                                  <img
                                    class='x16dsc37'
                                    height='18'
                                    role='presentation'
                                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                                    width='18'
                                  />
                                  <div
                                    className='qnt'
                                    style={{ float: 'right' }}>
                                    {reply.likes}
                                  </div>
                                </div>
                                <div className='curtida-comentario-data'>
                                </div>
                        
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Comentariohn;
