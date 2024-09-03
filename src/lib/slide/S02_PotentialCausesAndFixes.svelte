<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let cause01Opacity = $state(1);
  let cause02Opacity = $state(0.65);
  let cause03Opacity = $state(0.65);
  let fix01Opacity = $state(1);
  let fix02Opacity = $state(0);
  let fix03Opacity = $state(0);
</script>

<Slide
  in={() => {
    cause01Opacity = 1;
    cause02Opacity = 0.65;
    cause03Opacity = 0.65;
    fix01Opacity = 1;
    fix02Opacity = 0;
    fix03Opacity = 0;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Potentail Causes And Fixes</p>
  <table class="s-6xl">
    <thead>
      <tr>
        <th>Cause</th>
        <th>Fix</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Transition visible>
            <p style:opacity={cause01Opacity}>Unregulated thread spawning</p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix01Opacity}>Configure the thread pool.</p>
          </Transition>
        </td>
      </tr>
      <tr>
        <td>
          <Transition visible>
            <p style:opacity={cause02Opacity}>Insufficient CPU or memory resources</p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix02Opacity}>
              Increase hardware resources, or scale horizontally by adding more replicas or
              instances.
            </p>
          </Transition>
        </td>
      </tr>
      <tr>
        <td>
          <Transition visible>
            <p style:opacity={cause03Opacity}>
              Flawed implementation or the presence of bugs in the code
            </p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix03Opacity}>
              Revisit and review the implementation & perform debugging.
            </p>
          </Transition>
        </td>
      </tr>
    </tbody>
  </table>
  <Transition
    do={() => {
      cause01Opacity = 0.65;
      fix01Opacity = 0.65;

      cause02Opacity = 1;
      fix02Opacity = 1;

      cause03Opacity = 0.65;
      fix03Opacity = 0;
    }}
  />
  <Transition
    do={() => {
      cause01Opacity = 0.65;
      fix01Opacity = 0.65;

      cause02Opacity = 0.65;
      fix02Opacity = 0.65;

      cause03Opacity = 1;
      fix03Opacity = 1;
    }}
  />
</Slide>
