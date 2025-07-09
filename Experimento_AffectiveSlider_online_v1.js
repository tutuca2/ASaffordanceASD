/********************************************** 
 * Experimento_Affectiveslider_Online_V1 *
 **********************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Experimento_AffectiveSlider_online_v1';  // from the Builder filename that created this script
let expInfo = {
    'participante': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstrucoesRoutineBegin());
flowScheduler.add(InstrucoesRoutineEachFrame());
flowScheduler.add(InstrucoesRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(engajamentoRoutineBegin());
flowScheduler.add(engajamentoRoutineEachFrame());
flowScheduler.add(engajamentoRoutineEnd());
flowScheduler.add(Tela_FinalRoutineBegin());
flowScheduler.add(Tela_FinalRoutineEachFrame());
flowScheduler.add(Tela_FinalRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Obrigado pela sua participação!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Obrigado pela sua participação!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimuli.xlsx', 'path': 'stimuli.xlsx'},
    {'name': 'Estimulos/novelo de fio de costura.png', 'path': 'Estimulos/novelo de fio de costura.png'},
    {'name': 'Estimulos/caixa de óculos.png', 'path': 'Estimulos/caixa de óculos.png'},
    {'name': 'Estimulos/chave de carro simples.png', 'path': 'Estimulos/chave de carro simples.png'},
    {'name': 'Estimulos/barbeador sujo.png', 'path': 'Estimulos/barbeador sujo.png'},
    {'name': 'Estimulos/cubo mágico.png', 'path': 'Estimulos/cubo mágico.png'},
    {'name': 'Estimulos/carro de brinquedo pequeno.png', 'path': 'Estimulos/carro de brinquedo pequeno.png'},
    {'name': 'Estimulos/mamadeira média.png', 'path': 'Estimulos/mamadeira média.png'},
    {'name': 'Estimulos/cotonete.png', 'path': 'Estimulos/cotonete.png'},
    {'name': 'Estimulos/pote com mariposa.png', 'path': 'Estimulos/pote com mariposa.png'},
    {'name': 'Estimulos/copo de bebê.png', 'path': 'Estimulos/copo de bebê.png'},
    {'name': 'Estimulos/parafuso.png', 'path': 'Estimulos/parafuso.png'},
    {'name': 'Estimulos/intestino de galinha.png', 'path': 'Estimulos/intestino de galinha.png'},
    {'name': 'Estimulos/chocolate.png', 'path': 'Estimulos/chocolate.png'},
    {'name': 'Estimulos/mão humana dissecada 1.png', 'path': 'Estimulos/mão humana dissecada 1.png'},
    {'name': 'Estimulos/caixa de cigarro.png', 'path': 'Estimulos/caixa de cigarro.png'},
    {'name': 'Estimulos/lata de salgadinho.png', 'path': 'Estimulos/lata de salgadinho.png'},
    {'name': 'Estimulos/fruta podre.png', 'path': 'Estimulos/fruta podre.png'},
    {'name': 'Estimulos/fio dental.png', 'path': 'Estimulos/fio dental.png'},
    {'name': 'Estimulos/pimenta.png', 'path': 'Estimulos/pimenta.png'},
    {'name': 'Estimulos/caixa de fósforos.png', 'path': 'Estimulos/caixa de fósforos.png'},
    {'name': 'Estimulos/aranha.png', 'path': 'Estimulos/aranha.png'},
    {'name': 'Estimulos/otoscópio.png', 'path': 'Estimulos/otoscópio.png'},
    {'name': 'Estimulos/pote de tinta verde.png', 'path': 'Estimulos/pote de tinta verde.png'},
    {'name': 'Estimulos/bombom.png', 'path': 'Estimulos/bombom.png'},
    {'name': 'Estimulos/pintinho de brinquedo.png', 'path': 'Estimulos/pintinho de brinquedo.png'},
    {'name': 'Estimulos/moela.png', 'path': 'Estimulos/moela.png'},
    {'name': 'Estimulos/pão sujo.png', 'path': 'Estimulos/pão sujo.png'},
    {'name': 'Estimulos/escova de dentes rosa.png', 'path': 'Estimulos/escova de dentes rosa.png'},
    {'name': 'Estimulos/chinelo de bebê.png', 'path': 'Estimulos/chinelo de bebê.png'},
    {'name': 'Estimulos/tampa de metal.png', 'path': 'Estimulos/tampa de metal.png'},
    {'name': 'Estimulos/cadeado.png', 'path': 'Estimulos/cadeado.png'},
    {'name': 'Estimulos/relógio touchscreen.png', 'path': 'Estimulos/relógio touchscreen.png'},
    {'name': 'Estimulos/dentadura.png', 'path': 'Estimulos/dentadura.png'},
    {'name': 'Estimulos/lata de cerveja.png', 'path': 'Estimulos/lata de cerveja.png'},
    {'name': 'Estimulos/inseticida.png', 'path': 'Estimulos/inseticida.png'},
    {'name': 'Estimulos/rim.png', 'path': 'Estimulos/rim.png'},
    {'name': 'Estimulos/coração cortado.png', 'path': 'Estimulos/coração cortado.png'},
    {'name': 'Estimulos/olho de boi.png', 'path': 'Estimulos/olho de boi.png'},
    {'name': 'Estimulos/tampa de garrafa.png', 'path': 'Estimulos/tampa de garrafa.png'},
    {'name': 'Estimulos/maçã.png', 'path': 'Estimulos/maçã.png'},
    {'name': 'Estimulos/boneca grande.png', 'path': 'Estimulos/boneca grande.png'},
    {'name': 'Estimulos/esparadrapo.png', 'path': 'Estimulos/esparadrapo.png'},
    {'name': 'Estimulos/shampoo.png', 'path': 'Estimulos/shampoo.png'},
    {'name': 'Estimulos/bola de enfeite de natal.png', 'path': 'Estimulos/bola de enfeite de natal.png'},
    {'name': 'Estimulos/escova com cabelo.png', 'path': 'Estimulos/escova com cabelo.png'},
    {'name': 'Estimulos/barata.png', 'path': 'Estimulos/barata.png'},
    {'name': 'Estimulos/bloco de montar.png', 'path': 'Estimulos/bloco de montar.png'},
    {'name': 'Estimulos/cigarro queimado.png', 'path': 'Estimulos/cigarro queimado.png'},
    {'name': 'Estimulos/pregador de roupa marrom.png', 'path': 'Estimulos/pregador de roupa marrom.png'},
    {'name': 'Estimulos/pilha de moedas.png', 'path': 'Estimulos/pilha de moedas.png'},
    {'name': 'Estimulos/temporizador de cozinha.png', 'path': 'Estimulos/temporizador de cozinha.png'},
    {'name': 'Estimulos/mão humana.png', 'path': 'Estimulos/mão humana.png'},
    {'name': 'Estimulos/chiclete com cabelo.png', 'path': 'Estimulos/chiclete com cabelo.png'},
    {'name': 'Estimulos/coração.png', 'path': 'Estimulos/coração.png'},
    {'name': 'Estimulos/bolha de sabão.png', 'path': 'Estimulos/bolha de sabão.png'},
    {'name': 'Estimulos/esponja de cozinha.png', 'path': 'Estimulos/esponja de cozinha.png'},
    {'name': 'Estimulos/cola de papel.png', 'path': 'Estimulos/cola de papel.png'},
    {'name': 'Estimulos/pilha.png', 'path': 'Estimulos/pilha.png'},
    {'name': 'Estimulos/banana.png', 'path': 'Estimulos/banana.png'},
    {'name': 'Estimulos/gloss.png', 'path': 'Estimulos/gloss.png'},
    {'name': 'Estimulos/cebola.png', 'path': 'Estimulos/cebola.png'},
    {'name': 'Estimulos/cerebelo.png', 'path': 'Estimulos/cerebelo.png'},
    {'name': 'Estimulos/apontador.png', 'path': 'Estimulos/apontador.png'},
    {'name': 'Estimulos/fezes de animal.png', 'path': 'Estimulos/fezes de animal.png'},
    {'name': 'Estimulos/clipe de papel.png', 'path': 'Estimulos/clipe de papel.png'},
    {'name': 'Estimulos/escova de dentes suja.png', 'path': 'Estimulos/escova de dentes suja.png'},
    {'name': 'Estimulos/lápis rosa.png', 'path': 'Estimulos/lápis rosa.png'},
    {'name': 'Estimulos/fio dental pequeno.png', 'path': 'Estimulos/fio dental pequeno.png'},
    {'name': 'Estimulos/cacto.png', 'path': 'Estimulos/cacto.png'},
    {'name': 'Estimulos/caixa de presente marrom.png', 'path': 'Estimulos/caixa de presente marrom.png'},
    {'name': 'Estimulos/caneta chique.png', 'path': 'Estimulos/caneta chique.png'},
    {'name': 'Estimulos/laranja.png', 'path': 'Estimulos/laranja.png'},
    {'name': 'Estimulos/pata de galinha.png', 'path': 'Estimulos/pata de galinha.png'},
    {'name': 'Estimulos/carro de brinquedo grande.png', 'path': 'Estimulos/carro de brinquedo grande.png'},
    {'name': 'Estimulos/carregador de celular.png', 'path': 'Estimulos/carregador de celular.png'},
    {'name': 'Estimulos/chupeta.png', 'path': 'Estimulos/chupeta.png'},
    {'name': 'Estimulos/pasta de dente.png', 'path': 'Estimulos/pasta de dente.png'},
    {'name': 'Estimulos/mamadeira pequena.png', 'path': 'Estimulos/mamadeira pequena.png'},
    {'name': 'Estimulos/lapis preto.png', 'path': 'Estimulos/lapis preto.png'},
    {'name': 'Estimulos/mamadeira maior.png', 'path': 'Estimulos/mamadeira maior.png'},
    {'name': 'Estimulos/castanha.png', 'path': 'Estimulos/castanha.png'},
    {'name': 'Estimulos/chave de fenda.png', 'path': 'Estimulos/chave de fenda.png'},
    {'name': 'Estimulos/termômetro.png', 'path': 'Estimulos/termômetro.png'},
    {'name': 'Estimulos/lata de refrigerante.png', 'path': 'Estimulos/lata de refrigerante.png'},
    {'name': 'Estimulos/caixa de presente.png', 'path': 'Estimulos/caixa de presente.png'},
    {'name': 'Estimulos/ketchup.png', 'path': 'Estimulos/ketchup.png'},
    {'name': 'Estimulos/dedo esquelético.png', 'path': 'Estimulos/dedo esquelético.png'},
    {'name': 'Estimulos/dinossauro de brinquedo.png', 'path': 'Estimulos/dinossauro de brinquedo.png'},
    {'name': 'Estimulos/detergente.png', 'path': 'Estimulos/detergente.png'},
    {'name': 'Estimulos/chiclete.png', 'path': 'Estimulos/chiclete.png'},
    {'name': 'Estimulos/alho.png', 'path': 'Estimulos/alho.png'},
    {'name': 'Estimulos/taça quebrada.png', 'path': 'Estimulos/taça quebrada.png'},
    {'name': 'Estimulos/pote de coleta de fezes.png', 'path': 'Estimulos/pote de coleta de fezes.png'},
    {'name': 'Estimulos/fita adesiva verde.png', 'path': 'Estimulos/fita adesiva verde.png'},
    {'name': 'Estimulos/seringa com agulha.png', 'path': 'Estimulos/seringa com agulha.png'},
    {'name': 'Estimulos/lâmpada.png', 'path': 'Estimulos/lâmpada.png'},
    {'name': 'Estimulos/adaptador de tomada.png', 'path': 'Estimulos/adaptador de tomada.png'},
    {'name': 'Estimulos/frasco de remédio.png', 'path': 'Estimulos/frasco de remédio.png'},
    {'name': 'Estimulos/pacote de biscoito.png', 'path': 'Estimulos/pacote de biscoito.png'},
    {'name': 'Estimulos/orelha humana.png', 'path': 'Estimulos/orelha humana.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'GUI/AS_intensity_cue.png', 'path': 'GUI/AS_intensity_cue.png'},
    {'name': 'GUI/AS_wideawake.png', 'path': 'GUI/AS_wideawake.png'},
    {'name': 'GUI/AS_sleepy.png', 'path': 'GUI/AS_sleepy.png'},
    {'name': 'GUI/AS_happy.png', 'path': 'GUI/AS_happy.png'},
    {'name': 'GUI/AS_unhappy.png', 'path': 'GUI/AS_unhappy.png'},
    {'name': 'GUI/AS_happy.png', 'path': 'GUI/AS_happy.png'},
    {'name': 'GUI/AS_intensity_cue.png', 'path': 'GUI/AS_intensity_cue.png'},
    {'name': 'GUI/AS_sleepy.png', 'path': 'GUI/AS_sleepy.png'},
    {'name': 'GUI/AS_unhappy.png', 'path': 'GUI/AS_unhappy.png'},
    {'name': 'GUI/AS_wideawake.png', 'path': 'GUI/AS_wideawake.png'},
    {'name': 'Estimulos/adaptador de tomada.png', 'path': 'Estimulos/adaptador de tomada.png'},
    {'name': 'Estimulos/alho.png', 'path': 'Estimulos/alho.png'},
    {'name': 'Estimulos/apontador.png', 'path': 'Estimulos/apontador.png'},
    {'name': 'Estimulos/aranha.png', 'path': 'Estimulos/aranha.png'},
    {'name': 'Estimulos/banana.png', 'path': 'Estimulos/banana.png'},
    {'name': 'Estimulos/barata.png', 'path': 'Estimulos/barata.png'},
    {'name': 'Estimulos/barbeador sujo.png', 'path': 'Estimulos/barbeador sujo.png'},
    {'name': 'Estimulos/bloco de montar.png', 'path': 'Estimulos/bloco de montar.png'},
    {'name': 'Estimulos/bola de enfeite de natal.png', 'path': 'Estimulos/bola de enfeite de natal.png'},
    {'name': 'Estimulos/bolha de sabão.png', 'path': 'Estimulos/bolha de sabão.png'},
    {'name': 'Estimulos/bombom.png', 'path': 'Estimulos/bombom.png'},
    {'name': 'Estimulos/boneca grande.png', 'path': 'Estimulos/boneca grande.png'},
    {'name': 'Estimulos/cacto.png', 'path': 'Estimulos/cacto.png'},
    {'name': 'Estimulos/cadeado.png', 'path': 'Estimulos/cadeado.png'},
    {'name': 'Estimulos/caixa de cigarro.png', 'path': 'Estimulos/caixa de cigarro.png'},
    {'name': 'Estimulos/caixa de fósforos.png', 'path': 'Estimulos/caixa de fósforos.png'},
    {'name': 'Estimulos/caixa de óculos.png', 'path': 'Estimulos/caixa de óculos.png'},
    {'name': 'Estimulos/caixa de presente marrom.png', 'path': 'Estimulos/caixa de presente marrom.png'},
    {'name': 'Estimulos/caixa de presente.png', 'path': 'Estimulos/caixa de presente.png'},
    {'name': 'Estimulos/caneta chique.png', 'path': 'Estimulos/caneta chique.png'},
    {'name': 'Estimulos/carregador de celular.png', 'path': 'Estimulos/carregador de celular.png'},
    {'name': 'Estimulos/carro de brinquedo grande.png', 'path': 'Estimulos/carro de brinquedo grande.png'},
    {'name': 'Estimulos/carro de brinquedo pequeno.png', 'path': 'Estimulos/carro de brinquedo pequeno.png'},
    {'name': 'Estimulos/castanha.png', 'path': 'Estimulos/castanha.png'},
    {'name': 'Estimulos/cebola.png', 'path': 'Estimulos/cebola.png'},
    {'name': 'Estimulos/cerebelo.png', 'path': 'Estimulos/cerebelo.png'},
    {'name': 'Estimulos/chave de carro simples.png', 'path': 'Estimulos/chave de carro simples.png'},
    {'name': 'Estimulos/chave de fenda.png', 'path': 'Estimulos/chave de fenda.png'},
    {'name': 'Estimulos/chiclete com cabelo.png', 'path': 'Estimulos/chiclete com cabelo.png'},
    {'name': 'Estimulos/chiclete.png', 'path': 'Estimulos/chiclete.png'},
    {'name': 'Estimulos/chinelo de bebê.png', 'path': 'Estimulos/chinelo de bebê.png'},
    {'name': 'Estimulos/chocolate.png', 'path': 'Estimulos/chocolate.png'},
    {'name': 'Estimulos/chupeta.png', 'path': 'Estimulos/chupeta.png'},
    {'name': 'Estimulos/cigarro queimado.png', 'path': 'Estimulos/cigarro queimado.png'},
    {'name': 'Estimulos/clipe de papel.png', 'path': 'Estimulos/clipe de papel.png'},
    {'name': 'Estimulos/cola de papel.png', 'path': 'Estimulos/cola de papel.png'},
    {'name': 'Estimulos/copo de bebê.png', 'path': 'Estimulos/copo de bebê.png'},
    {'name': 'Estimulos/coração cortado.png', 'path': 'Estimulos/coração cortado.png'},
    {'name': 'Estimulos/coração.png', 'path': 'Estimulos/coração.png'},
    {'name': 'Estimulos/cotonete.png', 'path': 'Estimulos/cotonete.png'},
    {'name': 'Estimulos/cubo mágico.png', 'path': 'Estimulos/cubo mágico.png'},
    {'name': 'Estimulos/dedo esquelético.png', 'path': 'Estimulos/dedo esquelético.png'},
    {'name': 'Estimulos/dentadura.png', 'path': 'Estimulos/dentadura.png'},
    {'name': 'Estimulos/detergente.png', 'path': 'Estimulos/detergente.png'},
    {'name': 'Estimulos/dinossauro de brinquedo.png', 'path': 'Estimulos/dinossauro de brinquedo.png'},
    {'name': 'Estimulos/escova com cabelo.png', 'path': 'Estimulos/escova com cabelo.png'},
    {'name': 'Estimulos/escova de dentes rosa.png', 'path': 'Estimulos/escova de dentes rosa.png'},
    {'name': 'Estimulos/escova de dentes suja.png', 'path': 'Estimulos/escova de dentes suja.png'},
    {'name': 'Estimulos/esparadrapo.png', 'path': 'Estimulos/esparadrapo.png'},
    {'name': 'Estimulos/esponja de cozinha.png', 'path': 'Estimulos/esponja de cozinha.png'},
    {'name': 'Estimulos/fezes de animal.png', 'path': 'Estimulos/fezes de animal.png'},
    {'name': 'Estimulos/fio dental pequeno.png', 'path': 'Estimulos/fio dental pequeno.png'},
    {'name': 'Estimulos/fio dental.png', 'path': 'Estimulos/fio dental.png'},
    {'name': 'Estimulos/fita adesiva verde.png', 'path': 'Estimulos/fita adesiva verde.png'},
    {'name': 'Estimulos/frasco de remédio.png', 'path': 'Estimulos/frasco de remédio.png'},
    {'name': 'Estimulos/fruta podre.png', 'path': 'Estimulos/fruta podre.png'},
    {'name': 'Estimulos/gloss.png', 'path': 'Estimulos/gloss.png'},
    {'name': 'Estimulos/inseticida.png', 'path': 'Estimulos/inseticida.png'},
    {'name': 'Estimulos/intestino de galinha.png', 'path': 'Estimulos/intestino de galinha.png'},
    {'name': 'Estimulos/ketchup.png', 'path': 'Estimulos/ketchup.png'},
    {'name': 'Estimulos/lâmpada.png', 'path': 'Estimulos/lâmpada.png'},
    {'name': 'Estimulos/lapis preto.png', 'path': 'Estimulos/lapis preto.png'},
    {'name': 'Estimulos/lápis rosa.png', 'path': 'Estimulos/lápis rosa.png'},
    {'name': 'Estimulos/laranja.png', 'path': 'Estimulos/laranja.png'},
    {'name': 'Estimulos/lata de cerveja.png', 'path': 'Estimulos/lata de cerveja.png'},
    {'name': 'Estimulos/lata de refrigerante.png', 'path': 'Estimulos/lata de refrigerante.png'},
    {'name': 'Estimulos/lata de salgadinho.png', 'path': 'Estimulos/lata de salgadinho.png'},
    {'name': 'Estimulos/maçã.png', 'path': 'Estimulos/maçã.png'},
    {'name': 'Estimulos/mamadeira maior.png', 'path': 'Estimulos/mamadeira maior.png'},
    {'name': 'Estimulos/mamadeira média.png', 'path': 'Estimulos/mamadeira média.png'},
    {'name': 'Estimulos/mamadeira pequena.png', 'path': 'Estimulos/mamadeira pequena.png'},
    {'name': 'Estimulos/mão humana dissecada 1.png', 'path': 'Estimulos/mão humana dissecada 1.png'},
    {'name': 'Estimulos/mão humana.png', 'path': 'Estimulos/mão humana.png'},
    {'name': 'Estimulos/moela.png', 'path': 'Estimulos/moela.png'},
    {'name': 'Estimulos/novelo de fio de costura.png', 'path': 'Estimulos/novelo de fio de costura.png'},
    {'name': 'Estimulos/olho de boi.png', 'path': 'Estimulos/olho de boi.png'},
    {'name': 'Estimulos/orelha humana.png', 'path': 'Estimulos/orelha humana.png'},
    {'name': 'Estimulos/otoscópio.png', 'path': 'Estimulos/otoscópio.png'},
    {'name': 'Estimulos/pacote de biscoito.png', 'path': 'Estimulos/pacote de biscoito.png'},
    {'name': 'Estimulos/pão sujo.png', 'path': 'Estimulos/pão sujo.png'},
    {'name': 'Estimulos/parafuso.png', 'path': 'Estimulos/parafuso.png'},
    {'name': 'Estimulos/pasta de dente.png', 'path': 'Estimulos/pasta de dente.png'},
    {'name': 'Estimulos/pata de galinha.png', 'path': 'Estimulos/pata de galinha.png'},
    {'name': 'Estimulos/pilha de moedas.png', 'path': 'Estimulos/pilha de moedas.png'},
    {'name': 'Estimulos/pilha.png', 'path': 'Estimulos/pilha.png'},
    {'name': 'Estimulos/pimenta.png', 'path': 'Estimulos/pimenta.png'},
    {'name': 'Estimulos/pintinho de brinquedo.png', 'path': 'Estimulos/pintinho de brinquedo.png'},
    {'name': 'Estimulos/pote com mariposa.png', 'path': 'Estimulos/pote com mariposa.png'},
    {'name': 'Estimulos/pote de coleta de fezes.png', 'path': 'Estimulos/pote de coleta de fezes.png'},
    {'name': 'Estimulos/pote de tinta verde.png', 'path': 'Estimulos/pote de tinta verde.png'},
    {'name': 'Estimulos/pregador de roupa marrom.png', 'path': 'Estimulos/pregador de roupa marrom.png'},
    {'name': 'Estimulos/relógio touchscreen.png', 'path': 'Estimulos/relógio touchscreen.png'},
    {'name': 'Estimulos/rim.png', 'path': 'Estimulos/rim.png'},
    {'name': 'Estimulos/seringa com agulha.png', 'path': 'Estimulos/seringa com agulha.png'},
    {'name': 'Estimulos/shampoo.png', 'path': 'Estimulos/shampoo.png'},
    {'name': 'Estimulos/taça quebrada.png', 'path': 'Estimulos/taça quebrada.png'},
    {'name': 'Estimulos/tampa de garrafa.png', 'path': 'Estimulos/tampa de garrafa.png'},
    {'name': 'Estimulos/tampa de metal.png', 'path': 'Estimulos/tampa de metal.png'},
    {'name': 'Estimulos/temporizador de cozinha.png', 'path': 'Estimulos/temporizador de cozinha.png'},
    {'name': 'Estimulos/termômetro.png', 'path': 'Estimulos/termômetro.png'},
    {'name': 'stimuli.xlsx', 'path': 'stimuli.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DATA);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participante"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstrucoesClock;
var text_instrucoes;
var button_iniciar;
var trialClock;
var imageEstimulo;
var image_intensity_cue_Alerta;
var sliderAlerta;
var AS_wideawake;
var AS_sleepy;
var image_intensity_cue_Valencia;
var sliderValencia;
var AS_happy;
var AS_unhappy;
var button_proxima;
var tela_transicaoClock;
var text_2;
var engajamentoClock;
var text;
var sliderAtencao;
var button_terminar;
var Tela_FinalClock;
var textFinal;
var button_salvar_resultados;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instrucoes"
  InstrucoesClock = new util.Clock();
  text_instrucoes = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instrucoes',
    text: 'Obrigado por participar do experimento!\n\nAperte o botão abaixo para iniciar',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.3], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  button_iniciar = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_iniciar',
    text: 'INICIAR',
    fillColor: 'darkgrey',
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.2)],
    letterHeight: 0.05,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -1
  });
  button_iniciar.clock = new util.Clock();
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  imageEstimulo = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageEstimulo', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.46), 0], 
    draggable: false,
    size : [0.9, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_intensity_cue_Alerta = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_intensity_cue_Alerta', units : undefined, 
    image : 'GUI/AS_intensity_cue.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.44, 0.25], 
    draggable: false,
    size : [0.6, 0.044],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  sliderAlerta = new visual.Slider({
    win: psychoJS.window, name: 'sliderAlerta',
    startValue: undefined,
    size: [0.59, 0.044], pos: [0.44, 0.2], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 1000],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  AS_wideawake = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_wideawake', units : undefined, 
    image : 'GUI/AS_wideawake.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.82, 0.23], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  AS_sleepy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_sleepy', units : undefined, 
    image : 'GUI/AS_sleepy.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.06, 0.23], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_intensity_cue_Valencia = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_intensity_cue_Valencia', units : undefined, 
    image : 'GUI/AS_intensity_cue.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.44, 0], 
    draggable: false,
    size : [0.6, 0.044],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  sliderValencia = new visual.Slider({
    win: psychoJS.window, name: 'sliderValencia',
    startValue: undefined,
    size: [0.59, 0.044], pos: [0.44, (- 0.05)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 1000],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  AS_happy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_happy', units : undefined, 
    image : 'GUI/AS_happy.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.82, (- 0.02)], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  AS_unhappy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'AS_unhappy', units : undefined, 
    image : 'GUI/AS_unhappy.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.06, (- 0.02)], 
    draggable: false,
    size : [0.14, 0.14],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  button_proxima = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_proxima',
    text: 'Próxima',
    fillColor: [0.6549, 0.6549, 0.6549],
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0.44, (- 0.3)],
    letterHeight: 0.05,
    size: [0.3, 0.1],
    ori: 0.0
    ,
    depth: -9
  });
  button_proxima.clock = new util.Clock();
  
  // Initialize components for Routine "tela_transicao"
  tela_transicaoClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "engajamento"
  engajamentoClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Obigado por participar!\n\nComo foi a sua atenção durante o experimento?\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  sliderAtencao = new visual.Slider({
    win: psychoJS.window, name: 'sliderAtencao',
    startValue: undefined,
    size: [1.4, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["Muito ruim", "Um pouco ruim", "Moderada", "Boa", "Muito boa"], fontSize: 0.04, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  button_terminar = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_terminar',
    text: 'Salvar resultados',
    fillColor: [0.6549, 0.6549, 0.6549],
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.35)],
    letterHeight: 0.04,
    size: [0.4, 0.16],
    ori: 0.0
    ,
    depth: -2
  });
  button_terminar.clock = new util.Clock();
  
  // Initialize components for Routine "Tela_Final"
  Tela_FinalClock = new util.Clock();
  textFinal = new visual.TextStim({
    win: psychoJS.window,
    name: 'textFinal',
    text: 'Seus resultados serão salvos e baixados como um arquivo ".csv"\n\nPor favor envie esse arquivo ao pesquisador que te convidou a participar ou a Matheus Felippin:\n\nEmail: matheusfelippin@biof.ufrj.br\nou WhatsApp: (32) 98883-4300  ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_salvar_resultados = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_salvar_resultados',
    text: 'Terminar experimento',
    fillColor: [0.6549, 0.6549, 0.6549],
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, (- 0.35)],
    letterHeight: 0.04,
    size: [0.6, 0.2],
    ori: 0.0
    ,
    depth: -1
  });
  button_salvar_resultados.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var InstrucoesMaxDurationReached;
var InstrucoesMaxDuration;
var InstrucoesComponents;
function InstrucoesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instrucoes' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    InstrucoesClock.reset();
    routineTimer.reset();
    InstrucoesMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_iniciar to account for continued clicks & clear times on/off
    button_iniciar.reset()
    psychoJS.experiment.addData('Instrucoes.started', globalClock.getTime());
    InstrucoesMaxDuration = null
    // keep track of which components have finished
    InstrucoesComponents = [];
    InstrucoesComponents.push(text_instrucoes);
    InstrucoesComponents.push(button_iniciar);
    
    for (const thisComponent of InstrucoesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstrucoesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instrucoes' ---
    // get current time
    t = InstrucoesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instrucoes* updates
    if (t >= 0.0 && text_instrucoes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instrucoes.tStart = t;  // (not accounting for frame time here)
      text_instrucoes.frameNStart = frameN;  // exact frame index
      
      text_instrucoes.setAutoDraw(true);
    }
    
    
    // *button_iniciar* updates
    if (t >= 0 && button_iniciar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_iniciar.tStart = t;  // (not accounting for frame time here)
      button_iniciar.frameNStart = frameN;  // exact frame index
      
      button_iniciar.setAutoDraw(true);
    }
    
    if (button_iniciar.status === PsychoJS.Status.STARTED) {
      // check whether button_iniciar has been pressed
      if (button_iniciar.isClicked) {
        if (!button_iniciar.wasClicked) {
          // store time of first click
          button_iniciar.timesOn.push(button_iniciar.clock.getTime());
          // store time clicked until
          button_iniciar.timesOff.push(button_iniciar.clock.getTime());
        } else {
          // update time clicked until;
          button_iniciar.timesOff[button_iniciar.timesOff.length - 1] = button_iniciar.clock.getTime();
        }
        if (!button_iniciar.wasClicked) {
          // end routine when button_iniciar is clicked
          continueRoutine = false;
          
        }
        // if button_iniciar is still clicked next frame, it is not a new click
        button_iniciar.wasClicked = true;
      } else {
        // if button_iniciar is clicked next frame, it is a new click
        button_iniciar.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_iniciar hasn't started / has finished
      button_iniciar.clock.reset();
      // if button_iniciar is clicked next frame, it is a new click
      button_iniciar.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstrucoesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstrucoesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instrucoes' ---
    for (const thisComponent of InstrucoesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instrucoes.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_iniciar.numClicks', button_iniciar.numClicks);
    psychoJS.experiment.addData('button_iniciar.timesOn', button_iniciar.timesOn);
    psychoJS.experiment.addData('button_iniciar.timesOff', button_iniciar.timesOff);
    // the Routine "Instrucoes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(tela_transicaoRoutineBegin(snapshot));
      trialsLoopScheduler.add(tela_transicaoRoutineEachFrame());
      trialsLoopScheduler.add(tela_transicaoRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    imageEstimulo.setImage(stimulus);
    sliderAlerta.reset()
    sliderValencia.reset()
    // reset button_proxima to account for continued clicks & clear times on/off
    button_proxima.reset()
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(imageEstimulo);
    trialComponents.push(image_intensity_cue_Alerta);
    trialComponents.push(sliderAlerta);
    trialComponents.push(AS_wideawake);
    trialComponents.push(AS_sleepy);
    trialComponents.push(image_intensity_cue_Valencia);
    trialComponents.push(sliderValencia);
    trialComponents.push(AS_happy);
    trialComponents.push(AS_unhappy);
    trialComponents.push(button_proxima);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageEstimulo* updates
    if (t >= 0.0 && imageEstimulo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageEstimulo.tStart = t;  // (not accounting for frame time here)
      imageEstimulo.frameNStart = frameN;  // exact frame index
      
      imageEstimulo.setAutoDraw(true);
    }
    
    
    // *image_intensity_cue_Alerta* updates
    if (t >= 3 && image_intensity_cue_Alerta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_intensity_cue_Alerta.tStart = t;  // (not accounting for frame time here)
      image_intensity_cue_Alerta.frameNStart = frameN;  // exact frame index
      
      image_intensity_cue_Alerta.setAutoDraw(true);
    }
    
    
    // *sliderAlerta* updates
    if (t >= 3 && sliderAlerta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderAlerta.tStart = t;  // (not accounting for frame time here)
      sliderAlerta.frameNStart = frameN;  // exact frame index
      
      sliderAlerta.setAutoDraw(true);
    }
    
    
    // *AS_wideawake* updates
    if (t >= 3 && AS_wideawake.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_wideawake.tStart = t;  // (not accounting for frame time here)
      AS_wideawake.frameNStart = frameN;  // exact frame index
      
      AS_wideawake.setAutoDraw(true);
    }
    
    
    // *AS_sleepy* updates
    if (t >= 3 && AS_sleepy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_sleepy.tStart = t;  // (not accounting for frame time here)
      AS_sleepy.frameNStart = frameN;  // exact frame index
      
      AS_sleepy.setAutoDraw(true);
    }
    
    
    // *image_intensity_cue_Valencia* updates
    if (t >= 3 && image_intensity_cue_Valencia.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_intensity_cue_Valencia.tStart = t;  // (not accounting for frame time here)
      image_intensity_cue_Valencia.frameNStart = frameN;  // exact frame index
      
      image_intensity_cue_Valencia.setAutoDraw(true);
    }
    
    
    // *sliderValencia* updates
    if (t >= 3 && sliderValencia.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderValencia.tStart = t;  // (not accounting for frame time here)
      sliderValencia.frameNStart = frameN;  // exact frame index
      
      sliderValencia.setAutoDraw(true);
    }
    
    
    // *AS_happy* updates
    if (t >= 3 && AS_happy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_happy.tStart = t;  // (not accounting for frame time here)
      AS_happy.frameNStart = frameN;  // exact frame index
      
      AS_happy.setAutoDraw(true);
    }
    
    
    // *AS_unhappy* updates
    if (t >= 3 && AS_unhappy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AS_unhappy.tStart = t;  // (not accounting for frame time here)
      AS_unhappy.frameNStart = frameN;  // exact frame index
      
      AS_unhappy.setAutoDraw(true);
    }
    
    
    // *button_proxima* updates
    if (((sliderValencia.rating && sliderAlerta.rating)) && button_proxima.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_proxima.tStart = t;  // (not accounting for frame time here)
      button_proxima.frameNStart = frameN;  // exact frame index
      
      button_proxima.setAutoDraw(true);
    }
    
    if (button_proxima.status === PsychoJS.Status.STARTED) {
      // check whether button_proxima has been pressed
      if (button_proxima.isClicked) {
        if (!button_proxima.wasClicked) {
          // store time of first click
          button_proxima.timesOn.push(button_proxima.clock.getTime());
          // store time clicked until
          button_proxima.timesOff.push(button_proxima.clock.getTime());
        } else {
          // update time clicked until;
          button_proxima.timesOff[button_proxima.timesOff.length - 1] = button_proxima.clock.getTime();
        }
        if (!button_proxima.wasClicked) {
          // end routine when button_proxima is clicked
          continueRoutine = false;
          
        }
        // if button_proxima is still clicked next frame, it is not a new click
        button_proxima.wasClicked = true;
      } else {
        // if button_proxima is clicked next frame, it is a new click
        button_proxima.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_proxima hasn't started / has finished
      button_proxima.clock.reset();
      // if button_proxima is clicked next frame, it is a new click
      button_proxima.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('sliderAlerta.response', sliderAlerta.getRating());
    psychoJS.experiment.addData('sliderAlerta.rt', sliderAlerta.getRT());
    psychoJS.experiment.addData('sliderValencia.response', sliderValencia.getRating());
    psychoJS.experiment.addData('sliderValencia.rt', sliderValencia.getRT());
    psychoJS.experiment.addData('button_proxima.numClicks', button_proxima.numClicks);
    psychoJS.experiment.addData('button_proxima.timesOn', button_proxima.timesOn);
    psychoJS.experiment.addData('button_proxima.timesOff', button_proxima.timesOff);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tela_transicaoMaxDurationReached;
var tela_transicaoMaxDuration;
var tela_transicaoComponents;
function tela_transicaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tela_transicao' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    tela_transicaoClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    tela_transicaoMaxDurationReached = false;
    // update component parameters for each repeat
    tela_transicaoMaxDuration = 2.0
    // keep track of which components have finished
    tela_transicaoComponents = [];
    tela_transicaoComponents.push(text_2);
    
    for (const thisComponent of tela_transicaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function tela_transicaoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tela_transicao' ---
    // get current time
    t = tela_transicaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > tela_transicaoMaxDuration) {
        tela_transicaoMaxDurationReached = true
        continueRoutine = false
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tela_transicaoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tela_transicaoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tela_transicao' ---
    for (const thisComponent of tela_transicaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (tela_transicaoMaxDurationReached) {
        tela_transicaoClock.add(tela_transicaoMaxDuration);
    } else {
        tela_transicaoClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var engajamentoMaxDurationReached;
var engajamentoMaxDuration;
var engajamentoComponents;
function engajamentoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'engajamento' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    engajamentoClock.reset();
    routineTimer.reset();
    engajamentoMaxDurationReached = false;
    // update component parameters for each repeat
    sliderAtencao.reset()
    // reset button_terminar to account for continued clicks & clear times on/off
    button_terminar.reset()
    psychoJS.experiment.addData('engajamento.started', globalClock.getTime());
    engajamentoMaxDuration = null
    // keep track of which components have finished
    engajamentoComponents = [];
    engajamentoComponents.push(text);
    engajamentoComponents.push(sliderAtencao);
    engajamentoComponents.push(button_terminar);
    
    for (const thisComponent of engajamentoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function engajamentoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'engajamento' ---
    // get current time
    t = engajamentoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *sliderAtencao* updates
    if (t >= 0.0 && sliderAtencao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderAtencao.tStart = t;  // (not accounting for frame time here)
      sliderAtencao.frameNStart = frameN;  // exact frame index
      
      sliderAtencao.setAutoDraw(true);
    }
    
    
    // *button_terminar* updates
    if ((sliderAtencao.rating) && button_terminar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_terminar.tStart = t;  // (not accounting for frame time here)
      button_terminar.frameNStart = frameN;  // exact frame index
      
      button_terminar.setAutoDraw(true);
    }
    
    if (button_terminar.status === PsychoJS.Status.STARTED) {
      // check whether button_terminar has been pressed
      if (button_terminar.isClicked) {
        if (!button_terminar.wasClicked) {
          // store time of first click
          button_terminar.timesOn.push(button_terminar.clock.getTime());
          // store time clicked until
          button_terminar.timesOff.push(button_terminar.clock.getTime());
        } else {
          // update time clicked until;
          button_terminar.timesOff[button_terminar.timesOff.length - 1] = button_terminar.clock.getTime();
        }
        if (!button_terminar.wasClicked) {
          // end routine when button_terminar is clicked
          continueRoutine = false;
          
        }
        // if button_terminar is still clicked next frame, it is not a new click
        button_terminar.wasClicked = true;
      } else {
        // if button_terminar is clicked next frame, it is a new click
        button_terminar.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_terminar hasn't started / has finished
      button_terminar.clock.reset();
      // if button_terminar is clicked next frame, it is a new click
      button_terminar.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of engajamentoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function engajamentoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'engajamento' ---
    for (const thisComponent of engajamentoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('engajamento.stopped', globalClock.getTime());
    psychoJS.experiment.addData('sliderAtencao.response', sliderAtencao.getRating());
    psychoJS.experiment.addData('button_terminar.numClicks', button_terminar.numClicks);
    psychoJS.experiment.addData('button_terminar.timesOn', button_terminar.timesOn);
    psychoJS.experiment.addData('button_terminar.timesOff', button_terminar.timesOff);
    // the Routine "engajamento" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Tela_FinalMaxDurationReached;
var Tela_FinalMaxDuration;
var Tela_FinalComponents;
function Tela_FinalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Tela_Final' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Tela_FinalClock.reset();
    routineTimer.reset();
    Tela_FinalMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_salvar_resultados to account for continued clicks & clear times on/off
    button_salvar_resultados.reset()
    Tela_FinalMaxDuration = 15.0
    // keep track of which components have finished
    Tela_FinalComponents = [];
    Tela_FinalComponents.push(textFinal);
    Tela_FinalComponents.push(button_salvar_resultados);
    
    for (const thisComponent of Tela_FinalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Tela_FinalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Tela_Final' ---
    // get current time
    t = Tela_FinalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > Tela_FinalMaxDuration) {
        Tela_FinalMaxDurationReached = true
        continueRoutine = false
    }
    
    // *textFinal* updates
    if (t >= 0.0 && textFinal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textFinal.tStart = t;  // (not accounting for frame time here)
      textFinal.frameNStart = frameN;  // exact frame index
      
      textFinal.setAutoDraw(true);
    }
    
    
    // *button_salvar_resultados* updates
    if (t >= 3.0 && button_salvar_resultados.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_salvar_resultados.tStart = t;  // (not accounting for frame time here)
      button_salvar_resultados.frameNStart = frameN;  // exact frame index
      
      button_salvar_resultados.setAutoDraw(true);
    }
    
    if (button_salvar_resultados.status === PsychoJS.Status.STARTED) {
      // check whether button_salvar_resultados has been pressed
      if (button_salvar_resultados.isClicked) {
        if (!button_salvar_resultados.wasClicked) {
          // store time of first click
          button_salvar_resultados.timesOn.push(button_salvar_resultados.clock.getTime());
          // store time clicked until
          button_salvar_resultados.timesOff.push(button_salvar_resultados.clock.getTime());
        } else {
          // update time clicked until;
          button_salvar_resultados.timesOff[button_salvar_resultados.timesOff.length - 1] = button_salvar_resultados.clock.getTime();
        }
        if (!button_salvar_resultados.wasClicked) {
          // end routine when button_salvar_resultados is clicked
          continueRoutine = false;
          
        }
        // if button_salvar_resultados is still clicked next frame, it is not a new click
        button_salvar_resultados.wasClicked = true;
      } else {
        // if button_salvar_resultados is clicked next frame, it is a new click
        button_salvar_resultados.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_salvar_resultados hasn't started / has finished
      button_salvar_resultados.clock.reset();
      // if button_salvar_resultados is clicked next frame, it is a new click
      button_salvar_resultados.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Tela_FinalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Tela_FinalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Tela_Final' ---
    for (const thisComponent of Tela_FinalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('button_salvar_resultados.numClicks', button_salvar_resultados.numClicks);
    psychoJS.experiment.addData('button_salvar_resultados.timesOn', button_salvar_resultados.timesOn);
    psychoJS.experiment.addData('button_salvar_resultados.timesOff', button_salvar_resultados.timesOff);
    // the Routine "Tela_Final" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
